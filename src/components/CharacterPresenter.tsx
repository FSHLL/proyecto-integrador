import { Canvas } from "@react-three/fiber";
import { ReactNode } from 'react';
import { Environment, OrbitControls } from "@react-three/drei";

interface CharacterPresenterProps {
    children: ReactNode;
}

export const CharacterPresenter = ({ children }: CharacterPresenterProps) => {
    return (
        <>
            <Canvas camera={{ position: [1, 1.5, 2.5], fov: 50 }} shadows>
                <ambientLight intensity={6} />
                <directionalLight
                    position={[-5, 5, 5]}
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                />
                <Environment preset="city" />
                <OrbitControls />

                <group position={[0, -1, 0]}>
                    {children}
                </group>

                <mesh
                    rotation={[-0.5 * Math.PI, 0, 0]}
                    position={[0, -1, 0]}
                    receiveShadow
                >
                    <planeGeometry args={[10, 10, 1, 1]}/>
                    <shadowMaterial transparent opacity={0.2} />
                </mesh>
            </Canvas>
        </>
    );
};
