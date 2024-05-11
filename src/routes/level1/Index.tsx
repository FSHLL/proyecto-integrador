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

export const Index = () => {

    const characterURL = getModelPath('warrior');

    const characterRef = useRef<RapierRigidBody>();

    const demonRef = useRef<RapierRigidBody>();

    const curCheckpoint = useCheckpoint((state) => state.curCheckpoint);

    // const [trunksToShow, setTrunksToShow] = useState<JSX.Element[]>([]);

    const [velocity, setVelocity] = useState<number>(2.5);

    const [ecctrlMode, setEcctrlMode] = useState<string | null>(null);

    const [loading, setLoading] = useState(false);

    const [bullets, setBullets] = useState<TypeBullet[]>([]);

    // @ts-expect-error State types unavailable
    const curAnimation = useGame((state) => state.curAnimation);

    // @ts-expect-error State types unavailable
    const setMoveToPoint = useGame((state) => state.setMoveToPoint);

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
        const demonPosition = demonRef.current?.translation();
        const characterPosition = characterRef.current?.translation()

        if (demonPosition && characterPosition) {
            const bulletPosition = position;

            const direction = direction2Points(characterPosition, demonPosition)

            const bulletAngle = Math.atan2(direction.x, direction.z);

            const bullet = {
                id: (new Date()).toTimeString(),
                position: vec3(bulletPosition),
                angle: bulletAngle,
                // player: state.id,
            };
            setBullets((bullets) => [...bullets, bullet]);
        }
    };

    const onHit = (bulletId: string) => {
        setBullets((bullets) => bullets.filter((bullet) => bullet.id !== bulletId));
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            // setTrunksToShow((prevTrunks) => {
            //     const randomX = getRandomArbitrary(-50, 40);
            //     const newTrunk = <Trunk key={prevTrunks.length} position={new Vector3(randomX, 5, 20)} />;
            //     return [...prevTrunks, newTrunk];
            // });
            // const bullet = {
            //     id: + "-" + +new Date(),
            //     position: vec3(characterRef.current?.translation()),
            //     angle: 0,
            //     // player: state.id,
            // }
            // setBullets((bullets: TypeBullet[]) => [...bullets, bullet]);
            // console.log(characterRef.current?.translation());
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <color attach="background" args={["#ececec"]} />

            {/* LIGHTS */}
            <ambientLight intensity={1} />
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
                        {/* <Priest position-y={-0.7} /> */}
                    </EcctrlAnimation>
                </Ecctrl>
            </KeyboardControls>

            {!loading &&
                <RigidBody type="fixed" colliders={"trimesh"} ccd>
                    <Map1 position={[0, -10, 98]}/>
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

            <Checkpoint id={1} level={1} position={new Vector3(0, -4.4, 10)} onCollision={inCheckpoint} />
            <Checkpoint id={2} level={1} position={new Vector3(0, -4.4, 40)} onCollision={inCheckpoint} />
            <Checkpoint id={3} level={1} position={new Vector3(-20, -4.4, 40)} onCollision={inCheckpoint} />

            <group >
                {/* @ts-expect-error Good reference */}
                <CharacterController attack={onAttack} position={[0,0,50]} moveSpeed={0} ref={demonRef} characterRef={characterRef}>
                    <Demon rigidBodyRef={demonRef} characterRef={characterRef} />
                </CharacterController>
            </group>


            {(bullets).map((bullet: TypeBullet, index: number) => (
                <Bullet
                    key={index}
                    id={bullet.id}
                    angle={bullet.angle}
                    position={bullet.position}
                    onHit={onHit} />
            ))}

            <Html>
                <LoadingScreen loading={loading} setLoading={setLoading} />
            </Html>

            {/* {trunksToShow} */}
        </>
    );
};
