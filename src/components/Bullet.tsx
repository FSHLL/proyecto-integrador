import { player } from "@/constants/colliders";
import { IntersectionEnterPayload, RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { MeshBasicMaterial, Vector3 } from "three";

interface BulletProps {
    id: string
    angle: number;
    position: Vector3;
    onHit: (bulletId: string) => void;
}

const BULLET_SPEED = 20;

const WEAPON_OFFSET = {
    x: -0.2,
    y: 1,
    z: 0.8,
};

const bulletMaterial = new MeshBasicMaterial({
    color: "hotpink",
    toneMapped: false,
});

bulletMaterial.color.multiplyScalar(42);

export const Bullet = ({ id, angle, position, onHit }: BulletProps) => {
    const rigidBody = useRef<RapierRigidBody>(null);

    useEffect(() => {
        // const audio = new Audio("/sounds/rifle.mp3");
        // audio.play();
        const velocity = {
            x: Math.sin(angle) * BULLET_SPEED,
            y: 0,
            z: Math.cos(angle) * BULLET_SPEED,
        };

        rigidBody.current?.setLinvel(velocity, true);
    });

    return (
        <group position={[position.x, position.y, position.z]} rotation-y={angle}>
            <group
                position-x={WEAPON_OFFSET.x}
                position-y={WEAPON_OFFSET.y}
                position-z={WEAPON_OFFSET.z}
            >
                <RigidBody
                    ref={rigidBody}
                    gravityScale={0}
                    onIntersectionEnter={(e: IntersectionEnterPayload) => {
                        // console.log(e.other.rigidBodyObject?.name);
                        if (e.other.rigidBodyObject?.name === player) {
                            onHit(id)
                        }
                    }}
                    sensor
                >
                    <mesh position-z={0.25} material={bulletMaterial} castShadow>
                        <boxGeometry args={[0.05, 0.05, 0.5]} />
                    </mesh>
                </RigidBody>
            </group>
        </group>
    );
};