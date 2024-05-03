import { Cylinder } from "@react-three/drei";
import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

interface TrunkProps {
    position?: Vector3;
    scale?: Vector3;
}

export const Trunk = ({ position = new Vector3(0, 0, 0), scale = new Vector3(0.5, 5, 0.5)} : TrunkProps) => {

    const kicker = useRef<RapierRigidBody>(null)

    useFrame(() => {
        setTimeout(() => {
            kicker.current?.setLinvel({ x: 0, y: 0, z: -40}, true);
        }, 5000);
    })

    return (
        <>
            <RigidBody colliders="hull" ref={kicker}>
                <Cylinder position={position} scale={scale}>
                    <meshStandardMaterial color="#8b5b50" />
                </Cylinder>
            </RigidBody>
        </>
    );
};
