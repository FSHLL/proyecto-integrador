import React from 'react';
import { Cylinder } from "@react-three/drei";
import { CylinderCollider, RigidBody } from "@react-three/rapier";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import { KeyboardControls } from "@react-three/drei";
import { animationSet, keyboardMap } from '../../constants/joystick';
import { Priest } from '../../models/Priest';


export const Index = () => {

    const characterURL = './models/priest/model.glb'

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
            <RigidBody colliders={false} type="fixed" position-y={-0.5}>
                <CylinderCollider args={[0.5, 20]} />
                <Cylinder scale={[20, 1, 20]} receiveShadow>
                    <meshStandardMaterial color={"white"} />
                </Cylinder>
            </RigidBody>
        </>
    );
};
