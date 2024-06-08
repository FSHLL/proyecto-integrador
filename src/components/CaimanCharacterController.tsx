import { useGame as useLocalGame } from "@/stores/useGame";
import { CapsuleCollider, CollisionEnterPayload, RapierRigidBody, RigidBody } from "@react-three/rapier";
import { Children, ReactNode, RefObject, cloneElement, forwardRef, useEffect, useRef, useState } from "react";
import * as THREE from 'three'
// @ts-expect-error No Types for Ecctrl
import { useGame } from "ecctrl";
import { animationSet } from "@/constants/joystick";
import { player } from "@/constants/colliders";
import { direction2Points, distance2Points } from "@/helpers/distance";
import { Vector } from "@dimforge/rapier3d-compat";
import { useCharacter } from "@/stores/useCharacter";
import { useFrame } from "@react-three/fiber";

// const JUMP_FORCE = 0.5;
// const MOVEMENT_SPEED = 0.5;
const MAX_VEL = 3;
const ATTACK_COOLDOWN = 1000;

type CaimanCharacterControllerProps = JSX.IntrinsicElements['group'] & {
    // characterRef: MutableRefObject<RapierRigidBody | undefined>;
    // position: THREE.Vector3;
    children: ReactNode;
    moveSpeed?: number;
    attack?: (position: Vector) => void
    delay?: number
    damage?: number
    death?: (position: Vector) => void
    waterCollation?: (name: string) => void
}

const defaultProps = {
    moveSpeed: 0,
    delay: 1000,
    damage: 30
};

// export const CharacterController = ({characterRef, children}: CharacterControllerProps) => {
export const CaimanCharacterController = forwardRef<RapierRigidBody, CaimanCharacterControllerProps>((props: CaimanCharacterControllerProps, ref) => {

    props = { ...defaultProps, ...props }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const rigidBody = ref as RefObject<RapierRigidBody> || useRef<RapierRigidBody>()

    const characterRef = useCharacter((state) => state.characterRef)

    const [lastAttackTime, setLastAttackTime] = useState(0);

    const isOnFloor = useRef(true);
    const character = useRef<THREE.Group>(null);

    const [life, setLife] = useState<number>(100);
    const lifeBarRef = useRef<THREE.Mesh>(null);

    const doDamage = useLocalGame((state) => state.doDamage)

    // @ts-expect-error State types unavailable
    const curAnimation = useGame((state) => state.curAnimation);

    const updateLife = () => {
        const lifeBar = lifeBarRef.current;
        const damage = props.damage ?? defaultProps.damage

        if (curAnimation === animationSet.action1) {
            setLife(life - damage)
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
        } else if(coll.rigidBodyObject?.name === 'w1' || coll.rigidBodyObject?.name === 'w2') {
            if (props.waterCollation) {
                props.waterCollation(coll.rigidBodyObject?.name)
            }
        }
    }

    useEffect(() => {
        const lifeBar = lifeBarRef.current;

        const playerPosition = characterRef?.current?.translation()
        const characterPosition = rigidBody.current?.translation()

        if (playerPosition && characterPosition) {
            const distance = distance2Points(
                characterPosition,
                playerPosition
            )

            if (curAnimation === animationSet.action1 && distance <= 60)
            {
                const damage = props.damage ?? defaultProps.damage
                setLife(life - damage)
                if (lifeBar && life > 0) {
                    const sacaleX = life / 100;
                    lifeBar.scale.set(sacaleX, 1, 1);
                } else if(props.death) {
                    props.death(characterPosition)
                }
            }
        }
    }, [characterRef, curAnimation, life, props, rigidBody])

    const isLimitVelocity = (linvel: Vector) => {
        return linvel.x < MAX_VEL && linvel.y < MAX_VEL && linvel.z < MAX_VEL
    }

    useFrame(() => {
        const currentTime = Date.now();
        const elapsedTimeSinceLastAttack = currentTime - lastAttackTime;

        const linvel = rigidBody.current?.linvel();
        const characterPosition = characterRef?.current?.translation()
        const rigidPosition = rigidBody.current?.translation()

        if (linvel && characterPosition && rigidPosition) {
            const direction = direction2Points(characterPosition, rigidPosition)
            const distance = distance2Points(characterPosition, rigidPosition)
            // console.log(distance);
            
            if (distance <= 70 && distance > 4 && life > 0 && isLimitVelocity(linvel)) {
                
                if(props.attack && elapsedTimeSinceLastAttack >= ATTACK_COOLDOWN) {
                    props.attack(rigidPosition)
                    setLastAttackTime(currentTime);
                }
            }

            const moveSpeed = props.moveSpeed ?? defaultProps.moveSpeed

            if (distance <= 40 && distance && moveSpeed > 0 && linvel.x < MAX_VEL && linvel.y < MAX_VEL) {
                const scaledDirection = direction.multiplyScalar(0.1);
                const scaledDistance = Math.min(1, 40 / distance);
                rigidBody.current?.applyImpulse(scaledDirection.multiplyScalar(scaledDistance), true);
            }

            if (character.current) {
                const angle = Math.atan2(direction.x, direction.z);
                character.current.rotation.y = angle;
            }
        }
    });

    const clonedChildren = Children.map(props.children, (child) => {
        // @ts-expect-error unavailable
        return cloneElement(child, { ...child.props, rigidBody });
    });

    return (
        <group>
            <RigidBody
                ref={rigidBody}
                scale={[0.5, 0.5, 0.5]}
                position={props.position}
                enabledRotations={[false, false, false]}
                onCollisionEnter={(coll) => {
                    isOnFloor.current = true;
                    handleCollision(coll)
                }}
                includeInvisible
            >
                {
                    life > 0 &&
                    <CapsuleCollider args={[0.8, 0.4]} position={[0, 1.2, 0]} />
                }
                <group visible={life > 0} ref={character}>
                    <mesh position={[0, 3, 0]} ref={lifeBarRef}>
                        <boxGeometry args={[2, 0.2, 0.2]} />
                        <meshBasicMaterial color="red" />
                    </mesh>
                    {clonedChildren}
                </group>
            </RigidBody>
        </group>
    );
})
