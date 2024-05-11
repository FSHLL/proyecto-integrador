import { player } from "@/constants/colliders";
import { distance2Points } from "@/helpers/distance";
import { useCharacter } from "@/stores/useCharacter";
import { useHealth } from "@/stores/useHealth";
// @ts-expect-error No Types for Ecctrl
import { useGame } from "ecctrl";
import { CapsuleCollider, CollisionEnterPayload, RapierRigidBody, RigidBody } from "@react-three/rapier";
import React, { ReactNode, RefObject, forwardRef, useEffect, useRef, useState } from "react";
import * as THREE from 'three'
import { animationSet } from "@/constants/joystick";

// const JUMP_FORCE = 0.5;
// const MOVEMENT_SPEED = 0.5;
// const MAX_VEL = 3;

interface CharacterControllerProps {
    children: ReactNode;
    moveSpeed: number;
    onRotationChange(rot: THREE.Euler): () => void
}

export const CharacterController = forwardRef<RapierRigidBody, CharacterControllerProps>(
    ({ children, moveSpeed = 0, onRotationChange }: CharacterControllerProps,
        ref
    ) => {

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const rigidBody = ref as RefObject<RapierRigidBody> || useRef<RapierRigidBody>()

        // @ts-expect-error State types unavailable
        const curAnimation = useGame((state) => state.curAnimation);

        const [life, setLife] = useState<number>(100);
        const lifeBarRef = useRef<THREE.Mesh>(null);

        // useEffect(() => {
        //     const lifeBar = lifeBarRef.current;
        //     if (lifeBar) {
        //         const sacaleX = life / 100;
        //         lifeBar.scale.set(sacaleX, 1, 1);
        //     }
        // }, [life]);

        const doDamage = useHealth((state) => state.doDamage)

        const updateLife = () => {
            const lifeBar = lifeBarRef.current;
            console.log(curAnimation);

            if (curAnimation === animationSet.action1) {
                setLife(life-10)
                if (lifeBar && life > 0) {
                    const sacaleX = life / 100;
                    lifeBar.scale.set(sacaleX, 1, 1);
                }
            } else {
                doDamage(10)
            }
        }

        const isOnFloor = useRef(true);
        const character = useRef<THREE.Group>(null);

        const characterRef = useCharacter((state) => state.characterRef);

        const handleCollision = (coll: CollisionEnterPayload) => {
            if (coll.rigidBodyObject?.name === player) {
                updateLife()
            }
        }

        useEffect(() => {
            const linvel = rigidBody.current?.linvel();
            const characterPosition = characterRef?.translation()
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

                const distance = distance2Points(characterPosition, rigidPosition)

                if (character.current && distance > 3) {
                    character.current.lookAt(
                        characterPosition.x,
                        character.current.position.y,
                        characterPosition.z
                    );

                    onRotationChange(character.current.rotation)
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
                    onCollisionEnter={(coll) => {
                        isOnFloor.current = true;
                        handleCollision(coll)
                    }}
                >
                    <CapsuleCollider args={[0.8, 0.4]} position={[0, 1.2, 0]} />
                    <mesh position={[0, 3, 0]} ref={lifeBarRef}>
                        <boxGeometry args={[2, 0.2, 0.2]} />
                        <meshBasicMaterial color="red" />
                    </mesh>
                    <group ref={character}>
                        {React.Children.map(children, (child) => {
                            if (React.isValidElement(child)) {
                                {/* @ts-expect-error Good reference */ }
                                return React.cloneElement(child, { rigidBodyRef: rigidBody });
                            }
                            return child;
                        })}
                    </group>
                </RigidBody>
            </group>
        );
    })
