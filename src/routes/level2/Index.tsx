import { RapierRigidBody, RigidBody, vec3 } from "@react-three/rapier";
// @ts-expect-error No Types for Ecctrl
import Ecctrl, { EcctrlAnimation, useGame } from "ecctrl";
import { Html, KeyboardControls } from "@react-three/drei";
import { animationSet, keyboardMap } from '../../constants/joystick';
// import { Priest } from '@/models/Priest';
import { getModelPath } from '@/helpers/path';
import { useEffect, useRef, useState } from "react";
import { playAudio, stopAudio } from "@/helpers/audio";
import { Map2 } from "@/models/Map2";
import { Warrior } from "@/models/Warrior";
import { getRandomArbitrary } from "@/helpers/random";
import { Trunk } from "@/components/Trunk";
import { Vector3 } from "three";
import { useCheckpoint } from "@/stores/useCheckpoint";
import { LoadingScreen } from "@/components/LoadingScreen";
import { gameStates, useGame as useLocalGame } from "@/stores/useGame";
import { GameOver } from "@/components/GameOver";
import { rewards } from "@/constants/rewards";
import { Reward } from "@/Interfaces/Reward";
import { Cross } from "@/models/Cross";
import { Vector } from "@dimforge/rapier3d-compat";
import { player } from "@/constants/colliders";
import { useCharacter } from "@/stores/useCharacter";
import { direction2Points } from "@/helpers/distance";
import { Bullet as TypeBullet } from "@/Interfaces/Bullet";
import { Bullet } from "@/components/Bullet";
import { CharacterController } from "@/components/CharacterController";
import { Demon2 } from "@/models/Demon2";

export const Index = () => {

    const characterURL = getModelPath('warrior')

    const characterRef = useRef<RapierRigidBody>();

    const setCharacterRef = useCharacter((state) => state.setCharacterRef)

    const curCheckpoint = useCheckpoint((state) => state.curCheckpoint);

    const [trunksToShow, setTrunksToShow] = useState<JSX.Element[]>([]);

    const [velocity, setVelocity]  = useState<number>(2.5)

    const [ecctrlMode, setEcctrlMode]  = useState<string|null>(null)

    const [loading, setLoading] = useState(false);

    const [bullets, setBullets] = useState<TypeBullet[]>([]);

    // @ts-expect-error State types unavailable
    const curAnimation = useGame((state) => state.curAnimation)

    // @ts-expect-error State types unavailable
    const setMoveToPoint = useGame((state) => state.setMoveToPoint);

    const setCurLevel = useLocalGame((state) => state.setCurLevel);
    const gameState = useLocalGame((state) => state.gameState);

    // const [boosDeath, setBoosDeath] = useState(false);

    const storeRewards = useLocalGame((state) => state.rewards);
    const [availableRewards, setAvailableRewards] = useState<Reward[]>([]);

    const onHit = (bulletId: string) => {
        setBullets((bullets) => bullets.filter((bullet) => bullet.id !== bulletId));
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

    useEffect(() => {
        const timer = setTimeout(() => {
            setTrunksToShow((prevTrunks) => {
                const randomX = getRandomArbitrary(-50, 40);
                const newTrunk = <Trunk key={prevTrunks.length} position={new Vector3(randomX, 5, 20)} />;
                return [...prevTrunks, newTrunk];
            });
        }, 1000);

        return () => clearTimeout(timer);
    });

    useEffect(() => {
        if (['Walk', 'Run'].includes(curAnimation) && !loading) {
            playAudio(curAnimation.toLowerCase())
        }else{
            stopAudio()
        }
    }, [curAnimation, loading]);

    useEffect(() => {
        setCharacterRef(characterRef)
    }, [characterRef, setCharacterRef])

    useEffect(() => {
        if (curCheckpoint) {
            setLoading(true);
            setEcctrlMode('PointToMove')
            setVelocity(14)
            setMoveToPoint(new Vector3(curCheckpoint.position.x, -0.7, curCheckpoint.position.z))
        }
        setCurLevel(2)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (storeRewards) {
            setAvailableRewards(rewards.filter(reward => !storeRewards.some(stored => stored.id === reward.id && stored.level !== 2)))
        }
    }, [storeRewards])

    return (
        <>
            <color attach="background" args={["#ececec"]} />

            {/* LIGHTS */}
            <ambientLight intensity={1} />
            <directionalLight
                position={[5, 5, 5]}
                intensity={0.5}
                castShadow
            />

            <KeyboardControls map={keyboardMap}>
                <Ecctrl ref={characterRef} name={player} mode={ecctrlMode} maxVelLimit={velocity} camInitDis={-10} animated>
                    <EcctrlAnimation
                        characterURL={characterURL}
                        animationSet={animationSet}
                    >
                        <Warrior
                            position-y={-0.7}
                        />
                        {/* <Priest position-y={-0.7} /> */}
                    </EcctrlAnimation>
                </Ecctrl>
            </KeyboardControls>

            <RigidBody type="fixed" colliders="trimesh" ccd>
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

            <CharacterController attack={launchBullet} position={[60, 10, 50]}>
                <Demon2 />
            </CharacterController>

            <CharacterController attack={launchBullet} position={[60, 10, 60]}>
                <Demon2 />
            </CharacterController>

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

            <Html>
                <LoadingScreen loading={loading} setLoading={setLoading} />
                {
                    gameState === gameStates.GAME_OVER &&
                    <GameOver />
                }
                {/* {
                    boosDeath &&
                    <Win level="level3" />
                } */}
            </Html>

            {trunksToShow}
        </>
    );
};
