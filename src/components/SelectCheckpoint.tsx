import { Checkpoint } from "@/Interfaces/Checkpoint";
import { useCheckpoint } from "@/stores/useCheckpoint";
import { Drawer, Table } from "antd";
import { Vector3 } from "three";

interface SelectCheckpointProps {
    open: boolean;
    onClose: (close: boolean) => void;
    onSelected: () => void;
}

export const SelectCheckpoint = ({open = false, onClose, onSelected} : SelectCheckpointProps) => {
    const { checkpoints, setCurCheckpoint } = useCheckpoint();

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Nivel',
            dataIndex: 'level',
            key: 'level',
        },
        {
            title: 'Puntaje',
            dataIndex: 'score',
            key: 'score',
        },
        {
            title: 'Posición',
            dataIndex: 'position',
            key: 'position',
            render: (position: Vector3) => `[${position.x}, ${position.y}, ${position.z}]`,
        },
        {
            title: 'Fecha',
            dataIndex: 'timestamp',
            key: 'timestamp',
            render: (timestamp: string) => (new Date(timestamp)).toLocaleDateString(),
        },
    ];

    const handleSelectCheckpoint = (checkpoint: Checkpoint) => {
        setCurCheckpoint(checkpoint);
        onSelected()
    };

    return (
        <>
            <Drawer
                title={'Puntos de guardado'}
                placement="right"
                size={'large'}
                onClose={() => onClose(true)}
                open={open}
            >
                <Table
                    dataSource={checkpoints}
                    columns={columns}
                    rowKey={record => record.id}
                    onRow={record => ({
                        onClick: () => handleSelectCheckpoint(record),
                    })}
                />
            </Drawer>
        </>
    );
};
