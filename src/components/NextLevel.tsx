import React from 'react';
import {  Modal, Typography, Button } from 'antd';
// import { useNavigate } from 'react-router-dom';
import { useHealth } from '@/stores/useHealth';
const { Title } = Typography;

interface GameOverProps {
    // over: boolean;
    // setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NextLevel: React.FC<GameOverProps> = () => {
    // const handleClose = () => {
    //     setLoading(false);
    // };

    // const navigate = useNavigate()
    // const navigate = useNavigate();

    const reset = useHealth((state) => state.reset);

    const goToMenu = () => {
        // navigate('/game')
        reset()
        window.location.reload()
    }

    return (
        <Modal
            open={true}
            centered
            footer={null}
            closable={false}
            width={1000}
            style={{ textAlign: 'center' }}
        >
            <Typography>
                <br />
                <br />
                <br />
                <br />
                <br />
                {/* <Spin size="large" /> */}
                <Title>Terminaste el nivel con éxito.</Title>
                <Button onClick={goToMenu}>
                    Siguiente nivel
                </Button>
                <br />
                <br />
                <br />
                <br />
                <br />
            </Typography>
        </Modal>
    );
};
