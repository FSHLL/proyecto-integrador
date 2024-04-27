import { Divider, Typography } from 'antd';

const { Title } = Typography;

export const Members = () => {

    return (
        <>
            {/* <Flex gap="middle" wrap="wrap"> */}
            <Typography style={{ padding: 100 }}>
                <Title>Estefania Rojas - 2110014</Title>

                <Divider />

                <Title>Freder Hernandez - 2110023</Title>

                <Divider />

                <Title>John Pasichana - 1941012</Title>
            </Typography>
            {/* </Flex> */}
        </>
    );
};