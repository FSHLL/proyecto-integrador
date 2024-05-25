import { Vector3 } from 'three';
import { CollisionEnterPayload, RigidBody } from '@react-three/rapier';
import { Cylinder } from '@react-three/drei';
import { useCheckpoint } from '@/stores/useCheckpoint';
import { player } from '@/constants/colliders';
import { auth } from '@/firebase';
import { getMachineId } from '@/helpers/random';

interface CheckpointProps {
    id: number;
    level: number;
    position: Vector3;
    onCollision: (coll: CollisionEnterPayload) => void;
}

const Checkpoint = ({ id, level, position, onCollision }: CheckpointProps) => {

    const { checkpoints, addCheckpoint } = useCheckpoint();

    const handleAddCheckpoint = (coll: CollisionEnterPayload) => {
        const newCheckpoint = {
            id: id,
            userEmail: auth.currentUser?.email ?? getMachineId(),
            level: level,
            score: 100,
            position: position,
            timestamp: Date.now(),
        };
        const checkpoint = checkpoints.find(check => check.level === 1 && check.id === id)
        if (!checkpoint) {
            addCheckpoint(newCheckpoint);
        }
        onCollision(coll)
    };

    return (
        <>
            <RigidBody
                position={position}
                colliders={'ball'}
                type="fixed"
                onCollisionEnter={(coll) => {
                    if (coll.other.rigidBodyObject?.name === player) {
                        handleAddCheckpoint(coll)
                    }
                }}
            >
                {/* <CylinderCollider args={[0.25 / 2, 1]} /> */}
                <Cylinder scale={[1, 0.25, 1]}>
                    <meshStandardMaterial color="white" />
                </Cylinder>
            </RigidBody>
        </>
    );
};

export default Checkpoint;
