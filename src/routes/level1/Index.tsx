import { CylinderCollider, RapierRigidBody, RigidBody, vec3 } from "@react-three/rapier";
// @ts-expect-error No Types for Ecctrl
import Ecctrl, { EcctrlAnimation, useGame } from "ecctrl";
import { Cylinder, Html, KeyboardControls } from "@react-three/drei";
import { animationSet, keyboardMap } from '../../constants/joystick';
// import { Priest } from '@/models/Priest';
import { getModelPath } from '@/helpers/path';
import { useEffect, useRef, useState } from "react";
import { playAudio, stopAudio } from "@/helpers/audio";
import { Map1 } from "@/models/Map1";
import { Warrior } from "@/models/Warrior";
// import { getRandomArbitrary } from "@/helpers/random";
// import { Trunk } from "@/components/Trunk";
import { Vector3 } from "three";
import Checkpoint from "@/components/Checkpoint";
import { useCheckpoint } from "@/stores/useCheckpoint";
import { LoadingScreen } from "@/components/LoadingScreen";
import { player } from "@/constants/colliders";
import { Bullet } from "@/components/Bullet";
import { Bullet as TypeBullet } from "@/Interfaces/Bullet";
import { Demon } from "@/models/Demon";
// import * as THREE from 'three';
import { CharacterController } from "@/components/CharacterController";
import { direction2Points } from "@/helpers/distance";
import { Vector } from "@dimforge/rapier3d-compat";
import { Demon2 } from "@/models/Demon2";
import { Pigman } from "@/models/Pigman";
import { gameStates, useHealth } from "@/stores/useHealth";
import { GameOver } from "@/components/GameOver";
import { useCharacter } from "@/stores/useCharacter";

export const Index = () => {

    const characterURL = getModelPath('warrior');

    const characterRef = useRef<RapierRigidBody>();

    const curCheckpoint = useCheckpoint((state) => state.curCheckpoint);

    const setCharacterRef = useCharacter((state) => state.setCharacterRef)

    // const [trunksToShow, setTrunksToShow] = useState<JSX.Element[]>([]);

    const [velocity, setVelocity] = useState<number>(2.5);

    const [ecctrlMode, setEcctrlMode] = useState<string | null>(null);

    const [loading, setLoading] = useState(false);

    const [bullets, setBullets] = useState<TypeBullet[]>([]);

    // @ts-expect-error State types unavailable
    const curAnimation = useGame((state) => state.curAnimation);

    // @ts-expect-error State types unavailable
    const setMoveToPoint = useGame((state) => state.setMoveToPoint);

    const gameState = useHealth((state) => state.gameState);

    const inCheckpoint = () => {
        setEcctrlMode(null)
        setVelocity(2.5)
        setLoading(false);
    };

    const onAttack = (position?: Vector) => {
        launchBullet(position);
    };

    const launchBullet = (position?: Vector) => {
        const demonPosition = position;
        const characterPosition = characterRef.current?.translation()

        if (demonPosition && characterPosition) {
            const bulletPosition = demonPosition;

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setCharacterRef(characterRef)
    }, [characterRef, setCharacterRef])

    return (
        <>
            {/* <color attach="background" args={["#ececec"]} /> */}
            <color attach="background" args={['#333333']} />

            {/* LIGHTS */}
            <ambientLight intensity={0.6} />
            <directionalLight
                position={[5, 5, 5]}
                intensity={0.5}
                castShadow />

            <KeyboardControls map={keyboardMap}>
                <Ecctrl ref={characterRef} name={player} mode={ecctrlMode} maxVelLimit={velocity} camInitDis={-5} animated>
                    <EcctrlAnimation
                        characterURL={characterURL}
                        animationSet={animationSet}
                    >
                        <Warrior
                            position-y={-0.9}
                        />
                        {/* <Priest position-y={-0.7} /> */}
                    </EcctrlAnimation>
                </Ecctrl>
            </KeyboardControls>

            {!loading &&
                <RigidBody type="fixed" colliders={"trimesh"} ccd>
                    <Map1 position={[-42, -10, 37]}/>
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

            <Checkpoint id={1} level={1} position={new Vector3(-5, -4.4, 80)} onCollision={inCheckpoint} />
            <Checkpoint id={2} level={1} position={new Vector3(-5, -4.4, 180)} onCollision={inCheckpoint} />
            <Checkpoint id={3} level={1} position={new Vector3(-60, -4.4, 100)} onCollision={inCheckpoint} />
            <Checkpoint id={4} level={1} position={new Vector3(-100, -4.4, 40)} onCollision={inCheckpoint} />

            {!loading &&
                <>
                    <CharacterController position={[0,0,50]} moveSpeed={0.2}>
                        <Demon />
                    </CharacterController>

                    <CharacterController position={[4,0,55]} moveSpeed={0.2}>
                        <Demon />
                    </CharacterController>

                    <CharacterController position={[-4,0,55]} moveSpeed={0.2}>
                        <Demon />
                    </CharacterController>

                    <CharacterController attack={onAttack} position={[4,0,100]}>
                        <Demon2 />
                    </CharacterController>

                    <CharacterController position={[-80 ,0, 10]} damage={15} moveSpeed={0.1}>
                        <Pigman scale={5}/>
                    </CharacterController>


                    {(bullets).map((bullet: TypeBullet, index: number) => (
                        <Bullet
                            key={index}
                            id={bullet.id}
                            angle={bullet.angle}
                            position={bullet.position}
                            onHit={onHit} />
                    ))
                    }
                </>
            }

            <Html>
                <LoadingScreen loading={loading} setLoading={setLoading} />
                {
                    gameState === gameStates.GAME_OVER &&
                    <GameOver />
                }
            </Html>

            {/* {trunksToShow} */}
        </>
    );
};
