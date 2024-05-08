import { CylinderCollider, RigidBody } from "@react-three/rapier";
// @ts-expect-error No Types for Ecctrl
import Ecctrl, { EcctrlAnimation, useGame } from "ecctrl";
import { Cylinder, Html, KeyboardControls } from "@react-three/drei";
import { animationSet, keyboardMap } from '../../constants/joystick';
// import { Priest } from '@/models/Priest';
import { getModelPath } from '@/helpers/path';
import { useEffect, useState } from "react";
import { playAudio, stopAudio } from "@/helpers/audio";
import { Map1 } from "@/models/Map1";
import { Warrior } from "@/models/Warrior";
import { getRandomArbitrary } from "@/helpers/random";
import { Trunk } from "@/components/Trunk";
import { Vector3 } from "three";
import Checkpoint from "@/components/Checkpoint";
import { useCheckpoint } from "@/stores/useCheckpoint";
import { LoadingScreen } from "@/components/LoadingScreen";
import { player } from "@/constants/colliders";

export const Index = () => {

    const characterURL = getModelPath('warrior')

    const curCheckpoint = useCheckpoint((state) => state.curCheckpoint);

    const [trunksToShow, setTrunksToShow] = useState<JSX.Element[]>([]);

    const [velocity, setVelocity]  = useState<number>(2.5)

    const [ecctrlMode, setEcctrlMode]  = useState<string|null>(null)

    const [loading, setLoading] = useState(false);

    // @ts-expect-error State types unavailable
    const curAnimation = useGame((state) => state.curAnimation)

    // @ts-expect-error State types unavailable
    const setMoveToPoint = useGame((state) => state.setMoveToPoint);

    const inCheckpoint = () => {
        console.log('INNNNNNNNNNNNNNNNNNNNNNNN');
        
        setEcctrlMode(null)
        setVelocity(2.5)
        setLoading(false);
    }

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
        if (curCheckpoint.position) {
            setLoading(true);
            setEcctrlMode('PointToMove')
            setVelocity(15)
            setMoveToPoint(new Vector3(curCheckpoint.position.x, -0.7, curCheckpoint.position.z))
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
                castShadow
            />

            <KeyboardControls map={keyboardMap}>
                <Ecctrl name={player} mode={ecctrlMode} maxVelLimit={velocity} camInitDis={-10} animated>
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

            <Html>
                <LoadingScreen loading={loading} setLoading={setLoading} />
            </Html>

            {trunksToShow}
        </>
    );
};
