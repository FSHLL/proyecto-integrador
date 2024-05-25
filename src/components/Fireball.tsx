import { player } from "@/constants/colliders";
import { useHealth } from "@/stores/useHealth";
import { IntersectionEnterPayload, RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { MeshBasicMaterial, SphereGeometry, Vector3 } from "three";

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

// Colores para el gradiente
const gradientColors = ["#FF4500", "#FFA500", "#FFFF00"];

export const Bullet = ({ id, angle, position, onHit }: BulletProps) => {
    const rigidBody = useRef<RapierRigidBody>(null);

    const doDamage = useHealth((state) => state.doDamage)

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

    // Cálculo del gradiente de color
    const colorIndex = Math.floor(Math.random() * gradientColors.length);
    const bulletColor = gradientColors[colorIndex];

    // Material con el gradiente de color
    const bulletMaterial = new MeshBasicMaterial({
        color: bulletColor,
        toneMapped: false,
        transparent: true,
        opacity: 0.8
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
                            doDamage(5)
                        }
                    }}
                    sensor
                >
                    <mesh position-z={0.25} material={bulletMaterial} castShadow>
                        <sphereGeometry args={[0.1, 16, 16]} />
                    </mesh>
                </RigidBody>
            </group>
        </group>
    );
};
