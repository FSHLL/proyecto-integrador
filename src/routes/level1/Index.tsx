import { RigidBody } from "@react-three/rapier";
// @ts-expect-error No Types for Ecctrl
import Ecctrl, { EcctrlAnimation, useGame } from "ecctrl";
import { KeyboardControls } from "@react-three/drei";
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
// import { Map3 } from "@/models/Map3";

export const Index = () => {

    const characterURL = getModelPath('warrior')

    const [trunksToShow, setTrunksToShow] = useState<JSX.Element[]>([]);

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

    // @ts-expect-error State types unavailable
    const curAnimation: string = useGame((state) => state.curAnimation)

    useEffect(() => {
        if (['Walk', 'Run'].includes(curAnimation)) {
            playAudio(curAnimation.toLowerCase())
        }else{
            stopAudio()
        }
    }, [curAnimation]);

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
                <Ecctrl camInitDis={-10} animated>
                    <EcctrlAnimation
                        characterURL={characterURL}
                        animationSet={animationSet}
                    >
                        <Warrior position-y={-0.7}/>
                        {/* <Priest position-y={-0.7} /> */}
                    </EcctrlAnimation>
                </Ecctrl>
            </KeyboardControls>

            <RigidBody type="fixed" colliders="trimesh" ccd>
                <Map1 position={[0, -10, 98]}/>
                <mesh
                    rotation={[-0.5 * Math.PI, 0, 0]}
                    position={[0, -1, 0]}
                    receiveShadow
                >
                    <planeGeometry args={[10, 10, 1, 1]}/>
                    <shadowMaterial transparent opacity={0.2} />
                </mesh>
            </RigidBody>

            {/* <RigidBody type="fixed" position={[0, -10, 0]}>
                <mesh receiveShadow>
                    <boxGeometry args={[100, 0.5, 100]} />
                    <meshStandardMaterial color="white" />
                </mesh>
            </RigidBody> */}

            {trunksToShow}
        </>
    );
};
