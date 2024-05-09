import { CapsuleCollider, RapierRigidBody, RigidBody } from "@react-three/rapier";
import { MutableRefObject, ReactNode, RefObject, forwardRef, useEffect, useRef } from "react";
import * as THREE from 'three'

// const JUMP_FORCE = 0.5;
const MOVEMENT_SPEED = 0.5;
const MAX_VEL = 3;

interface CharacterControllerProps {
    characterRef: MutableRefObject<RapierRigidBody | undefined>;
    // position: THREE.Vector3;
    children: ReactNode;
}

// export const CharacterController = ({characterRef, children}: CharacterControllerProps) => {
export const CharacterController = forwardRef<RapierRigidBody, CharacterControllerProps>(({ characterRef, children }: CharacterControllerProps, ref) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const rigidBody = ref as RefObject<RapierRigidBody> || useRef<RapierRigidBody>()

    const isOnFloor = useRef(true);
    const character = useRef<THREE.Group>(null);

    useEffect(() => {
        const impulse = { x: 0, y: 0, z: 0 };
        // if (jumpPressed && isOnFloor.current) {
        //     impulse.y += JUMP_FORCE;
        //     isOnFloor.current = false;
        // }

        console.log(characterRef.current?.translation());

        const linvel = rigidBody.current?.linvel();
        const characterPosition = characterRef.current?.translation()

        if (linvel && characterPosition) {
            let changeRotation = false;
            if (characterPosition.x > 20 && linvel.x < MAX_VEL) {
                impulse.x += MOVEMENT_SPEED;
                changeRotation = true;
            }
            // if (leftPressed && linvel.x > -MAX_VEL) {
            //     impulse.x -= MOVEMENT_SPEED;
            //     changeRotation = true;
            // }
            // if (backPressed && linvel.z < MAX_VEL) {
            //     impulse.z += MOVEMENT_SPEED;
            //     changeRotation = true;
            // }
            // if (forwardPressed && linvel.z > -MAX_VEL) {
            //     impulse.z -= MOVEMENT_SPEED;
            //     changeRotation = true;
            // }

            rigidBody.current?.applyImpulse(impulse, true);
            if (changeRotation) {
                const angle = Math.atan2(linvel.x, linvel.z);
                if (character.current) {
                    character.current.rotation.y = angle;
                }
            }
        }
    });

    return (
        <group>
            <RigidBody
                ref={rigidBody}
                colliders={false}
                scale={[0.5, 0.5, 0.5]}
                enabledRotations={[false, false, false]}
                onCollisionEnter={() => {
                    isOnFloor.current = true;
                }}
            >
                <CapsuleCollider args={[0.8, 0.4]} position={[0, 1.2, 0]} />
                <group ref={character}>
                    {children}
                </group>
            </RigidBody>
        </group>
    );
})
