import React from 'react';
import { Spin, Modal, Typography } from 'antd';
const { Title } = Typography;

interface LoadingScreenProps {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ loading, setLoading }) => {
    const handleClose = () => {
        setLoading(false);
    };

    return (
        <Modal
            open={loading}
            centered
            footer={null}
            closable={false}
            onCancel={handleClose}
            width={1000}
            style={{ textAlign: 'center' }}
        >
            <Typography>
                <br />
                <br />
                <br />
                <br />
                <br />
                <Spin size="large" />
                <Title>Cargando...</Title>
                <br />
                <br />
                <br />
                <br />
                <br />
            </Typography>
        </Modal>
    );
};
