import { CylinderCollider, RapierRigidBody, RigidBody, vec3 } from "@react-three/rapier";
// @ts-expect-error No Types for Ecctrl
import Ecctrl, { EcctrlAnimation, useGame } from "ecctrl";
import { Cylinder, Html, KeyboardControls, PositionPoint } from "@react-three/drei";
import { animationSet, keyboardMap } from '../../constants/joystick';
import { getModelPath } from '@/helpers/path';
import { useEffect, useRef, useState } from "react";
import { playAudio, stopAudio } from "@/helpers/audio";
import { Map1 } from "@/models/Map1";
import { Map2 } from "@/models/Map2";
import { Warrior } from "@/models/Warrior";
import { Vector3 } from "three";
import Checkpoint from "@/components/Checkpoint";
import { useCheckpoint } from "@/stores/useCheckpoint";
import { LoadingScreen } from "@/components/LoadingScreen";
import { player } from "@/constants/colliders";
import { Bullet } from "@/components/Fireball";
import { Bullet as TypeBullet } from "@/Interfaces/Bullet";
import { CharacterController } from "@/components/CharacterController";
import { direction2Points } from "@/helpers/distance";
import { Vector } from "@dimforge/rapier3d-compat";
import { Demon2 } from "@/models/Demon2";
import { Pigman } from "@/models/Pigman";
import { gameStates, useHealth } from "@/stores/useHealth";
import { GameOver } from "@/components/GameOver";
import { NextLevel } from "@/components/NextLevel";
import Recompense from "@/components/Recompense";

export const Index = () => {
    const characterURL = getModelPath('warrior');

    const characterRef = useRef<RapierRigidBody>();
    const demon2Ref = useRef<RapierRigidBody>();

    const curCheckpoint = useCheckpoint((state) => state.curCheckpoint);

    const [velocity, setVelocity] = useState<number>(2.5);
    const [ecctrlMode, setEcctrlMode] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [bullets, setBullets] = useState<TypeBullet[]>([]);
    const [showNextLevel, setShowNextLevel] = useState(false); // Estado para controlar si mostrar NextLevel
    const [showDemon2, setShowDemon2] = useState(true); // Estado para controlar si mostrar demon2

    const curAnimation = useGame((state) => state.curAnimation);
    const setMoveToPoint = useGame((state) => state.setMoveToPoint);
    const gameState = useHealth((state) => state.gameState);

    const inCheckpoint = () => {
        setEcctrlMode(null)
        setVelocity(2.5)
        setLoading(false);
    };

    const onAttack = (position?: Vector) => {
        setTimeout(() => {
            launchBullet(position);
        }, 1000);
    };

    const launchBullet = (position?: Vector) => {
        const demonPosition = demon2Ref.current?.translation();
        const characterPosition = characterRef.current?.translation()

        if (demonPosition && characterPosition) {
            const bulletPosition = position;

            const direction = direction2Points(characterPosition, demonPosition)
            const bulletAngle = Math.atan2(direction.x, direction.z);

            const bullet = {
                id: (new Date()).toTimeString(),
                position: vec3(bulletPosition),
                angle: bulletAngle,
            };
            setBullets((bullets) => [...bullets, bullet]);
        }
    };

    const onHit = (bulletId: string) => {
        setBullets((bullets) => bullets.filter((bullet) => bullet.id !== bulletId));
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        const demonPosition = demon2Ref.current?.translation();
        const characterPosition = characterRef.current?.translation();
        const distance = Math.sqrt(
            (demonPosition.x - characterPosition.x) ** 2 +
            (demonPosition.y - characterPosition.y) ** 2 +
            (demonPosition.z - characterPosition.z) ** 2
        );
        
        if (event.key === 'f') {
            if (distance < 3) {
                setShowNextLevel(true)
                
            }
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            onAttack();
        }, 1000);

        return () => clearTimeout(timer);
    });

    useEffect(() => {
        if ([animationSet.walk, animationSet.run].includes(curAnimation) && !loading) {
            playAudio(curAnimation.toLowerCase());
        } else {
            stopAudio();
        }
    }, [curAnimation, loading]);

    useEffect(() => {
        if (curCheckpoint.position) {
            setLoading(true);
            setEcctrlMode('PointToMove');
            setVelocity(14);
            setMoveToPoint(new Vector3(curCheckpoint.position.x, -0.7, curCheckpoint.position.z));
        }
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <>
            <color attach="background" args={['#333333']} />

            <ambientLight intensity={0.6} />
            <directionalLight
                position={[5, 5, 5]}
                intensity={0.5}
                castShadow />

            <KeyboardControls map={keyboardMap}>
                <Ecctrl ref={characterRef} name={player} mode={ecctrlMode} maxVelLimit={velocity} camInitDis={-10} animated>
                    <EcctrlAnimation
                        characterURL={characterURL}
                        animationSet={animationSet}
                    >
                        <Warrior
                            position-y={-0.9}
                        />
                    </EcctrlAnimation>
                </Ecctrl>
            </KeyboardControls>

            {!loading &&
                <RigidBody type="fixed" colliders={"trimesh"} ccd>
                    <Map2 position={[0, -10, 98]}/>
                    <mesh
                        rotation={[-0.5 * Math.PI, 0, 0]}
                        position={[0, 0, 0]}
                        receiveShadow
                    >
                        <planeGeometry args={[0, 0, 1, 1]}/>
                        <shadowMaterial transparent opacity={0.2} />
                    </mesh>
                </RigidBody>
            }

            {loading &&
                <RigidBody colliders={false} type="fixed" position={[0, -4.9, 98]}>
                    <CylinderCollider args={[0.5, 1000]} />
                    <Cylinder scale={[1000, 1, 1000]} receiveShadow>
                        {/* <meshStandardMaterial color={"transparent"} /> */}
                    </Cylinder>
                </RigidBody>
            }

            {!loading && showDemon2 && // Agregar la condición para mostrar demon2
                <>
                    <CharacterController attack={onAttack} position={[30, 37.7, 160]} moveSpeed={0} ref={demon2Ref} characterRef={characterRef}>
                        <Demon2 rigidBodyRef={demon2Ref} characterRef={characterRef}/>
                    </CharacterController>

                    {(bullets).map((bullet: TypeBullet, index: number) => (
                        <Bullet
                            key={index}
                            id={bullet.id}
                            angle={bullet.angle}
                            position={bullet.position}
                            onHit={onHit} />
                    ))}
                </>
            }

            <Checkpoint id={1} level={2} position={new Vector3(90, -4.4, 20)} onCollision={inCheckpoint} />
            <Checkpoint id={2} level={2} position={new Vector3(30, 0, 80)} onCollision={inCheckpoint} />
            <Checkpoint id={3} level={2} position={new Vector3(-90, 9.4, 130)} onCollision={inCheckpoint} />
            <Checkpoint id={4} level={2} position={new Vector3(10, 37.7, 160)} onCollision={inCheckpoint} />

            <Recompense id={1} level={2} position={new Vector3(5, -8.4, 0)} onCollision={() => collectRecompense} />
            <Recompense id={2} level={2} position={new Vector3(5, -7.4, 20)} onCollision={() => collectRecompense} />

            <Html>
                <LoadingScreen loading={loading} setLoading={setLoading} />
                {gameState === gameStates.GAME_OVER && <GameOver />}
                {showNextLevel && <NextLevel />}
            </Html>
        </>
    );
};
