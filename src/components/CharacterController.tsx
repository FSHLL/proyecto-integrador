import { useHealth } from "@/stores/useHealth";
import { CapsuleCollider, CollisionEnterPayload, RapierRigidBody, RigidBody } from "@react-three/rapier";
import { MutableRefObject, ReactNode, RefObject, forwardRef, useEffect, useRef, useState } from "react";
import * as THREE from 'three'
// @ts-expect-error No Types for Ecctrl
import { useGame } from "ecctrl";
import { animationSet } from "@/constants/joystick";
import { player } from "@/constants/colliders";
import { direction2Points } from "@/helpers/distance";

// const JUMP_FORCE = 0.5;
// const MOVEMENT_SPEED = 0.5;
// const MAX_VEL = 3;


type CharacterControllerProps = JSX.IntrinsicElements['group'] & {
    characterRef: MutableRefObject<RapierRigidBody | undefined>;
    // position: THREE.Vector3;
    children: ReactNode;
    moveSpeed: 0;
  }

// export const CharacterController = ({characterRef, children}: CharacterControllerProps) => {
export const CharacterController = forwardRef<RapierRigidBody, CharacterControllerProps>((props: CharacterControllerProps, ref) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const rigidBody = ref as RefObject<RapierRigidBody> || useRef<RapierRigidBody>()

    const isOnFloor = useRef(true);
    const character = useRef<THREE.Group>(null);

    const [life, setLife] = useState<number>(100);
    const lifeBarRef = useRef<THREE.Mesh>(null);

    const doDamage = useHealth((state) => state.doDamage)

   // @ts-expect-error State types unavailable
   const curAnimation = useGame((state) => state.curAnimation);

    const updateLife = () => {
        const lifeBar = lifeBarRef.current;

        if (curAnimation === animationSet.action1) {
            setLife(life-40)
            if (lifeBar && life > 0) {
                const sacaleX = life / 100;
                lifeBar.scale.set(sacaleX, 1, 1);
            }
        } else {
            doDamage(10)
        }
    }

    const handleCollision = (coll: CollisionEnterPayload) => {
        if (coll.rigidBodyObject?.name === player) {
            updateLife()
        }
    }

    useEffect(() => {
        const linvel = rigidBody.current?.linvel();
        const characterPosition = props.characterRef.current?.translation()
        const rigidPosition = rigidBody.current?.translation()

        if (linvel && characterPosition && rigidPosition) {
            const direction = direction2Points(characterPosition, rigidPosition)

            if (props.moveSpeed > 0) {
                rigidBody.current?.applyImpulse(direction, true);
            }

            if (character.current) {
                const angle = Math.atan2(direction.x, direction.z);
                character.current.rotation.y = angle;
            }
        }
    });

    return (
        <group>
            <RigidBody
                ref={rigidBody}
                colliders={false}
                scale={[0.5, 0.5, 0.5]}
                position={props.position}
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
                    {props.children}
                </group>
            </RigidBody>
        </group>
    );
})
