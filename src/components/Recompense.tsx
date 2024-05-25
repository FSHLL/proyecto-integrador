import { Vector3 } from 'three';
import { CollisionEnterPayload, RigidBody } from '@react-three/rapier';
import { Box } from '@react-three/drei'; // Importamos Box en lugar de Cylinder
import { useState } from 'react';

interface CheckpointProps {
    id?: number;
    level?: number;
    position: Vector3;
    onCollision: (coll: CollisionEnterPayload) => void;
}

const Recompense = ({ position, onCollision }: CheckpointProps) => {

    const [showRigidBody, setShowRigidBody] = useState(true);

    const handleCollisionEnter = (coll: CollisionEnterPayload) => {
        setShowRigidBody(false);
        onCollision(coll)
    };

    return (
        <>
            {showRigidBody && (
                <RigidBody
                    name="cuadrado"
                    position={position}
                    colliders={'ball'}
                    type="fixed"
                    onCollisionEnter={handleCollisionEnter}
                >
                    {/* Cambiamos <Cylinder> por <Box> */}
                    <Box scale={[1, 0.25, 1]}>
                        <meshStandardMaterial color="white" />
                    </Box>
                </RigidBody>
            )}
        </>
    );
};

export default Recompense;