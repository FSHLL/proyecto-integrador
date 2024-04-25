import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

export const CharacterPresenter = ({ children }) => {
    return (
        <>
            <Canvas camera={{ position: [5, 5, 5], fov: 30}}>
                <ambientLight intensity={6} />
                <Environment preset="city" />
                <OrbitControls />
                {children}
            </Canvas>
        </>
    );
};
