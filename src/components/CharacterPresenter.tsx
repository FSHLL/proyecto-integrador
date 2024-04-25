import { Canvas } from "@react-three/fiber";
import { ReactNode } from 'react';
import { Environment, OrbitControls } from "@react-three/drei";

interface CharacterPresenterProps {
    children: ReactNode;
}

export const CharacterPresenter = ({ children }: CharacterPresenterProps) => {
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
