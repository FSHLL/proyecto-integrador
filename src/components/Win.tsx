import {  Modal, Typography, Button } from 'antd';
const { Title } = Typography;

interface WinProps {
    level: string;
    // setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Win = (props: WinProps) => {

    const goToNextLevel = () => {
        window.location.pathname = newRoute(props.level)
    }

    const newRoute = (newPath: string) => {
        const regex = /\/([^\\/]*)$/;

        const path =  window.location.pathname;

        return path.replace(regex, "/" + newPath);
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
                <Title>Ganaste</Title>
                <Button onClick={goToNextLevel}>
                    Siguinete Nivel
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
