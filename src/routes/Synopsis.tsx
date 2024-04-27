import { Typography } from 'antd';

const { Title, Paragraph, Text } = Typography;

export const Synopsis = () => {
    // const navigate = useNavigate();

    return (
        <>
            {/* <Flex gap="middle" wrap="wrap"> */}
            <Typography style={{ padding: 100 }}>
                <Title>Sinpsis</Title>

                <Paragraph>
                    En la Cali de 1937, un sacerdote de apellido <Text strong>Collazos</Text> preocupado por la presencia de demonios en la ciudad,
                    inicia la construcción de tres grandes cruces en el cerro de la ciudad para protegerla de aquellos demonios
                    los cuales ya acechaban la ciudad e iniciaban a hacer caos, los cultivos y caleños empezaban a enfermar de
                    envidia y odio y eso los alejaba y creaba conflicto constante en las comunas.
                </Paragraph>

            </Typography>
            {/* </Flex> */}
        </>
    );
};