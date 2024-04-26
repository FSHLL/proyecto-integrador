import { Text3D } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';

const Menu = () => {
    const [isAnimating, setIsAnimating] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [scaleZ, setScaleZ] = useState(50);

    useFrame(() => {
        if (isAnimating) {
            if (scaleZ > 1) {
                setScaleZ(scaleZ - 0.5);
            } else {
                setIsAnimating(false);
            }
        }
    });

    return (
        <>
            <Text3D position={[-2, 1, -5]} font={'./fonts/Caveat_Regular.json'} scale={[1, 1, scaleZ]}>
                Buziraco
                <meshBasicMaterial color={'#241f1f'} />
            </Text3D>

            <Text3D
                position={[-1, -0.5, -5]}
                font={'./fonts/Caveat_Regular.json'}
                scale={[0.5, 0.5, scaleZ]}
                onPointerOver={() => setIsHovered(true)}
                onPointerOut={() => setIsHovered(false)}
                receiveShadow
            >
                Iniciar
                <meshBasicMaterial color={'#241f1f'} />
            </Text3D>

            {isHovered && (
            // <Text3D position={[-2, -2, -5]} font={'./fonts/Caveat_Regular.json'} scale={[1, 1, scaleZ]}>
            //     Buziraco
            //     <meshBasicMaterial color={'#241f1f'} />
            // </Text3D>
                <mesh>
                    <pointLight position={[-2, -2, -5]} intensity={1.5} />
                </mesh>
            )}
        </>
    );
};

export default Menu;