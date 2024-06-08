import { player } from "@/constants/colliders";
import { Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Vector3 } from "three";

export const CircleOfSpheres = ({
  center,
  radius,
  numSpheres,
}: {
  center: Vector3;
  radius: number;
  numSpheres: number;
}) => {
  const groupRef = useRef(null);

  const getVel = (index: number) => {
    const angle = (index / numSpheres) * Math.PI * 2;
    const xVelocity = Math.cos(angle) * 5; // Cambia la velocidad según sea necesario
    const zVelocity = Math.sin(angle) * 5; // Cambia la velocidad según sea necesario

    return [xVelocity, 0, zVelocity];
  };

  // useEffect(() => {
  //   groupRef.current?.children.forEach((rigidBody, index) => {
  //     const angle = (index / numSpheres) * Math.PI * 2;
  //     const xVelocity = Math.cos(angle) * 5; // Cambia la velocidad según sea necesario
  //     const zVelocity = Math.sin(angle) * 5; // Cambia la velocidad según sea necesario

  //     const velocity = {
  //         x: xVelocity,
  //         y: 0,
  //         z: zVelocity
  //     };
  //     console.log(rigidBody.setLinvel);

  //     // rigidBody.setLinvel(velocity, true);
  //   });
  // });

  return (
    <group ref={groupRef}>
      {Array.from({ length: numSpheres }).map((_, index) => (
        <RigidBody
          gravityScale={0}
          onIntersectionEnter={(e: IntersectionEnterPayload) => {
            // console.log(e.other.rigidBodyObject?.name);
            if (e.other.rigidBodyObject?.name === player) {
              //   onHit(id)
              //   doDamage(5)
            }
          }}
          sensor
          key={index}
          linearVelocity={getVel(index)}
          position={[
            center.x + radius * Math.cos((index / numSpheres) * Math.PI * 2),
            center.y,
            center.z + radius * Math.sin((index / numSpheres) * Math.PI * 2),
          ]}
          args={[0.1]}
        >
          <Sphere args={[0.5, 16, 16]}>
            <meshStandardMaterial color="blue" />
          </Sphere>
        </RigidBody>
      ))}
    </group>
  );
};
