import { Cylinder } from "@react-three/drei";
import { CollisionExitPayload, RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import { player } from "@/constants/colliders";
import { useGame } from "@/stores/useGame";

interface TrunkProps {
    position?: Vector3;
    scale?: Vector3;
}

export const Trunk = ({ position = new Vector3(0, 0, 0), scale = new Vector3(0.5, 5, 0.5)} : TrunkProps) => {

    const kicker = useRef<RapierRigidBody>(null)

    const doDamage = useGame((state) => state.doDamage)

    useFrame(() => {
        setTimeout(() => {
            kicker.current?.setLinvel({ x: 0, y: 0, z: -40}, true);
        }, 5000);
    })

    const onCollisionExit = (coll: CollisionExitPayload) => {
        console.log(coll.other.rigidBodyObject?.name);
        if (coll.other.rigidBodyObject?.name === player) {
            doDamage(5)
        }
    }

    return (
        <>
            <RigidBody onCollisionExit={onCollisionExit} colliders="hull" ref={kicker}>
                <Cylinder position={position} scale={scale}>
                    <meshStandardMaterial color="#8b5b50" />
                </Cylinder>
            </RigidBody>
        </>
    );
};
