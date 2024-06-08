import { CollisionEnterPayload, CylinderCollider, RapierRigidBody, RigidBody } from "@react-three/rapier";
// @ts-expect-error No Types for Ecctrl
import Ecctrl, { EcctrlAnimation, useGame } from "ecctrl";
import { Cylinder, Html, KeyboardControls, OrbitControls } from "@react-three/drei";
import { animationSet, keyboardMap } from '../../constants/joystick';
// import { Priest } from '@/models/Priest';
import { getModelPath } from '@/helpers/path';
import { useEffect, useRef, useState } from "react";
import { playAudio, stopAudio } from "@/helpers/audio";
import { Map3 } from "@/models/Map3";
import { Warrior } from "@/models/Warrior";
// import { getRandomArbitrary } from "@/helpers/random";
// import { Trunk } from "@/components/Trunk";
import { Vector3 } from "three";
import { useCheckpoint } from "@/stores/useCheckpoint";
import { LoadingScreen } from "@/components/LoadingScreen";
import { player } from "@/constants/colliders";
import { Bullet } from "@/components/Bullet";
import { Bullet as TypeBullet } from "@/Interfaces/Bullet";
import { Demon } from "@/models/Demon";
// import * as THREE from 'three';
import { CharacterController } from "@/components/CharacterController";
// import { direction2Points } from "@/helpers/distance";
// import { Vector } from "@dimforge/rapier3d-compat";
import { gameStates, useGame as useLocalGame } from "@/stores/useGame";
import { GameOver } from "@/components/GameOver";
import { useCharacter } from "@/stores/useCharacter";
import { rewards } from "@/constants/rewards";
import { Reward } from "@/Interfaces/Reward";
import { Cross } from "@/models/Cross";
import { Win } from "@/components/Win";
import { Caiman } from "@/models/Caiman";
import { Ocean } from "@/components/Ocean";
// import { rewards } from "./rewards";
// import { Reward } from "@/Interfaces/Reward";
// import { Cross } from "@/models/Cross";

export const Index = () => {

    const characterURL = getModelPath('warrior');

    const characterRef = useRef<RapierRigidBody>();

    const curCheckpoint = useCheckpoint((state) => state.curCheckpoint);

    const setCurCheckpoint = useCheckpoint((state) => state.setCurCheckpoint);

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

    const gameState = useLocalGame((state) => state.gameState);

    const setCurLevel = useLocalGame((state) => state.setCurLevel);

    const [availableRewards, setAvailableRewards] = useState<Reward[]>([]);

    const storeRewards = useLocalGame((state) => state.rewards);

    const [boosDeath, setBoosDeath] = useState(false);

    // const launchBullet = (position?: Vector) => {
    //     const demonPosition = position;
    //     const characterPosition = characterRef.current?.translation()

    //     if (demonPosition && characterPosition) {
    //         const bulletPosition = demonPosition;

    //         const direction = direction2Points(characterPosition, demonPosition)

    //         const bulletAngle = Math.atan2(direction.x, direction.z);

    //         const bullet = {
    //             id: (new Date()).toTimeString(),
    //             position: vec3(bulletPosition),
    //             angle: bulletAngle,
    //         };

    //         setBullets((bullets) => [...bullets, bullet]);
    //     }
    // };

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
        if (curCheckpoint && curCheckpoint.position) {
            setLoading(true);
            setEcctrlMode('PointToMove');
            setVelocity(14);
            setMoveToPoint(new Vector3(curCheckpoint.position.x, -0.7, curCheckpoint.position.z));
        }
        setCurLevel(3)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setCharacterRef(characterRef)
    }, [characterRef, setCharacterRef])

    useEffect(() => {
        if (storeRewards) {
            const r = rewards.filter(reward => reward.level === 3)
            setAvailableRewards(r.filter(reward => !storeRewards.some(stored => stored.id === reward.id)))
        }
    }, [storeRewards])

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

            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
            {/* <KeyboardControls map={keyboardMap}>
                <Ecctrl ref={characterRef} name={player} mode={ecctrlMode} maxVelLimit={velocity} camInitDis={-6} animated>
                    <EcctrlAnimation
                        characterURL={characterURL}
                        animationSet={animationSet}
                    >
                        <Warrior
                            position-y={-0.9}
                        />
                    </EcctrlAnimation>
                </Ecctrl>
            </KeyboardControls> */}

            {/* {!loading &&
                <RigidBody colliders={false} type="fixed" position={[-42, -6, 37]}>
                    <CylinderCollider args={[0.5, 1000]} />
                    <Cylinder scale={[1000, 1, 1000]} receiveShadow>
                    </Cylinder>
                </RigidBody>
            } */}

            {!loading &&
                <>
                    <RigidBody colliders={false} type="fixed" position={[-0, -4.5, 187]}>
                        <Ocean />
                    </RigidBody>

                    <RigidBody colliders={false} type="fixed" position={[-50, -4.5, 187]}>
                        <Ocean />
                    </RigidBody>
                    
                    <RigidBody type="fixed" colliders={"trimesh"}>
                        <Map3 position={[0, -10, 98]}/>
                        <mesh
                            rotation={[-0.5 * Math.PI, 0, 0]}
                            position={[0, 0, 0]}
                            receiveShadow
                        >
                            <planeGeometry args={[0, 0, 1, 1]}/>
                            <shadowMaterial transparent opacity={0.2} />
                        </mesh>
                    </RigidBody>

                    {/* <CharacterController position={[0,50,50]} moveSpeed={0.2}>
                        <Demon />
                    </CharacterController> */}

                    <Caiman scale={60} position={[0, 85, 150]} />

                    {
                        (bullets).map((bullet: TypeBullet, index: number) => (
                            <Bullet
                                key={index}
                                id={bullet.id}
                                angle={bullet.angle}
                                position={bullet.position}
                                onHit={onHit} />
                        ))
                    }

                    {
                        (availableRewards).map((reward: Reward) => (
                            <Cross
                                scale={0.5}
                                key={reward.id}
                                reward={reward}
                                position={reward.position}
                            />
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
                {
                    boosDeath &&
                    <Win level="level3" />
                }
            </Html>

            {/* {trunksToShow} */}
        </>
    );
};
