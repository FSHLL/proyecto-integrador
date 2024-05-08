import { Vector3 } from 'three';
import { RigidBody } from '@react-three/rapier';
import { Cylinder } from '@react-three/drei';
import { useCheckpoint } from '@/stores/useCheckpoint';
import { player } from '@/constants/colliders';

interface CheckpointProps {
    id: number;
    level: number;
    position: Vector3;
    onCollision: () => void;
}

const Checkpoint = ({ id, level, position, onCollision }: CheckpointProps) => {

    const { checkpoints, addCheckpoint } = useCheckpoint();

    const handleAddCheckpoint = () => {
        const newCheckpoint = {
            id: id,
            userEmail: 'mail.com',
            level: level,
            score: 100,
            position: position,
            timestamp: Date.now(),
        };
        const checkpoint = checkpoints.find(check => check.level === 1 && check.id === id)
        if (!checkpoint) {
            addCheckpoint(newCheckpoint);
        }
        onCollision()
    };

    return (
        <>
            <RigidBody
                position={position}
                colliders={'ball'}
                type="fixed"
                onCollisionEnter={(col) => {
                    if (col.other.rigidBodyObject?.name === player) {
                        handleAddCheckpoint()
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
