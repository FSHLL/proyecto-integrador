import { SelectCheckpoint } from '@/components/SelectCheckpoint';
import { Cross } from '@/models/Cross';
import { Cloud, Clouds, Environment, Html, Sphere, Stars, Text3D } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as THREE from "three";

const Menu = () => {
    const [isAnimating, setIsAnimating] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [scaleZ, setScaleZ] = useState(50);
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onSelected = () => {
        onClose()
        navigate('level1')
    };

    const navigate = useNavigate()

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
            <Environment preset='city'/>
            <Stars radius={150} depth={50} count={5000} factor={15} saturation={0} fade speed={1} />
            {/* <ambientLight color={"#ddd"} intensity={100} /> */}

            {!isAnimating && (
                <Clouds material={THREE.MeshBasicMaterial}>
                    <Cloud position={[-0.5, 3, -6]} volume={0.5}/>
                </Clouds>
            )}

            <Cross
                receiveShadow
                scale={[4, 4, 4]}
                position={[0, -2.4, -30]}
                rotation-y={1.25 * Math.PI}
            />

            <Cross
                receiveShadow
                scale={[3, 3, 3]}
                position={[-4, -2.9, -20]}
                rotation-y={1.4 * Math.PI}
            />

            <Cross
                receiveShadow
                scale={[3, 3, 3]}
                position={[4, -2.9, -20]}
                rotation-y={Math.PI}
            />

            <Sphere scale={[3,3,3]} position={[0, -3.7, -5]}>
                <meshStandardMaterial color="#4daf19" />
            </Sphere>

            <Text3D position={[-2, 1, -5]} font={'./fonts/Caveat_Regular.json'} scale={[1, 1, scaleZ]}>
                Buziraco
                {/* <meshBasicMaterial color={'#241f1f'} /> */}
                <meshBasicMaterial color={'white'} />
            </Text3D>

            <group
                onPointerOver={() => setIsHovered(true)}
                onPointerOut={() => setIsHovered(false)}
                onClick={() => navigate('level1')}
            >
                <Text3D
                    position={[-1, -0.2, -5]}
                    font={'./fonts/Caveat_Regular.json'}
                    scale={[0.5, 0.5, scaleZ]}
                    receiveShadow
                >
                    Iniciar
                    <meshBasicMaterial color={'white'} />
                    {/* <meshBasicMaterial color={'#241f1f'} /> */}
                </Text3D>
            </group>

            <group
                onPointerOver={() => setIsHovered(true)}
                onPointerOut={() => setIsHovered(false)}
                onClick={showDrawer}
            >
                <Text3D
                    position={[-1.4, -0.8, -4]}
                    font={'./fonts/Caveat_Regular.json'}
                    scale={[0.5, 0.5, scaleZ]}
                    receiveShadow
                >
                    Continuar
                    <meshBasicMaterial color={'white'} />
                    {/* <meshBasicMaterial color={'#241f1f'} /> */}
                </Text3D>
            </group>

            {isHovered && (
                <pointLight position={[0, 0, 0]} intensity={100} color="#fff" />
            )}

            {!isAnimating && (
                <Html>
                    <SelectCheckpoint open={open} onClose={onClose} onSelected={onSelected} />
                </Html>
            )}

        </>
    );
};

export default Menu;