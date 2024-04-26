import { RigidBody } from "@react-three/rapier";
// @ts-expect-error No Types for Ecctrl
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import { KeyboardControls } from "@react-three/drei";
import { animationSet, keyboardMap } from '../../constants/joystick';
import { Priest } from '@/models/Priest';
import { getModelPath } from '@/helpers/path';
import { Trunk } from "@/components/Trunk";
import { Vector3 } from "three";
import { useEffect, useState } from "react";
import { getRandomArbitrary } from "@/helpers/random";

export const Index = () => {

    const characterURL = getModelPath('priest')

    // const [trunksToShow, setTrunksToShow] = useState<JSX.Element[]>([]);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setTrunksToShow((prevTrunks) => {
    //             const randomX = getRandomArbitrary(-10, 10);
    //             const newTrunk = <Trunk key={prevTrunks.length} position={new Vector3(randomX, 0, 10)} />;
    //             return [...prevTrunks, newTrunk];
    //         });
    //     }, 2000);

    //     return () => clearTimeout(timer);
    // });

    return (
        <>
            {/* <OrbitControls /> */}
            {/* LIGHTS */}
            <ambientLight intensity={1} />
            <directionalLight
                position={[5, 5, 5]}
                intensity={0.5}
                castShadow
                color={"#9e69da"}
            />

            <KeyboardControls map={keyboardMap}>
                <Ecctrl camInitDis={-10} animated>
                    <EcctrlAnimation
                        characterURL={characterURL}
                        animationSet={animationSet}
                    >
                        <Priest position-y={-0.7} />
                    </EcctrlAnimation>
                </Ecctrl>
            </KeyboardControls>

            {/* STAGE */}
            <RigidBody type="fixed" position={[0, 0, 48]}>
                <mesh receiveShadow>
                    <boxGeometry args={[100, 0.5, 100]} />
                    <meshStandardMaterial color="white" />
                </mesh>
            </RigidBody>

            {/* {trunksToShow} */}
        </>
    );
};
