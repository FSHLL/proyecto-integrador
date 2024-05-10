import { CapsuleCollider, RapierRigidBody, RigidBody } from "@react-three/rapier";
import { MutableRefObject, ReactNode, RefObject, forwardRef, useEffect, useRef } from "react";
import * as THREE from 'three'

// const JUMP_FORCE = 0.5;
// const MOVEMENT_SPEED = 0.5;
// const MAX_VEL = 3;

interface CharacterControllerProps {
    characterRef: MutableRefObject<RapierRigidBody | undefined>;
    // position: THREE.Vector3;
    children: ReactNode;
    moveSpeed: number;
}

// export const CharacterController = ({characterRef, children}: CharacterControllerProps) => {
export const CharacterController = forwardRef<RapierRigidBody, CharacterControllerProps>(({ characterRef, children, moveSpeed = 2 }: CharacterControllerProps, ref) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const rigidBody = ref as RefObject<RapierRigidBody> || useRef<RapierRigidBody>()

    const isOnFloor = useRef(true);
    const character = useRef<THREE.Group>(null);

    // [moveSpeed, setMoveSpeed] = useState<number>(0.5)

    useEffect(() => {
        const linvel = rigidBody.current?.linvel();
        const characterPosition = characterRef.current?.translation()
        const rigidPosition = rigidBody.current?.translation()

        if (linvel && characterPosition && rigidPosition) {
            if (moveSpeed > 0) {
                const direction = new THREE.Vector3(
                    characterPosition.x - rigidPosition.x,
                    0,
                    characterPosition.z - rigidPosition.z
                ).normalize();

                rigidBody.current?.applyImpulse(direction, true);
            }


            if (character.current) {
                character.current.lookAt(
                    characterPosition.x,
                    character.current.position.y,
                    characterPosition.z
                );

                if (moveSpeed === 0) {
                    rigidBody.current?.setRotation({
                        x: 0,
                        y: character.current.rotation.y+20,
                        z: 0,
                        w: 0,
                    }, true);
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
