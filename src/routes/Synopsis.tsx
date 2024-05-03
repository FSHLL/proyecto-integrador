import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export const Synopsis = () => {
    // const navigate = useNavigate();

    return (
        <>
            {/* <Flex gap="middle" wrap="wrap"> */}
            <Typography style={{ padding: 100 }}>
                <Title>Sinopsis</Title>

                <Paragraph>
                    En la Cali de 1937 un sacerdote de apellido Collazos preocupado por la presencia de demonios en la ciudad, inicia la construcción de tres grandes cruces en el cerro de la ciudad para protegerla de aquellos demonios los cuales ya acechaban la ciudad e iniciaban a hacer daños a los cultivos, construcciones y envenenaban los corazones de los habitantes de la ciudad con amargura, envidias y egoísmo fue así como  los demonios empiezan a apoderarse de la ciudad y así se crea una secta de adoradores los cuales creían que ejecutando el mal agradaría a los demonios y estos los recompensarían con oro. Todo empeora en la ciudad debido a que los adoradores crecen en número y frustran el plan de protección de creado por el padre es así como Collazos debe unirse con un reconocido caza demonios extranjero que llega a la ciudad a atrapar a cada demonio en cada una de las cruces. Los tres demonios sueltos por la calle de la nueva ciudad son:  El demonio enfrenado, la candileja y el temido buziraco llamado también changó. 
                </Paragraph>

            </Typography>
            {/* </Flex> */}
        </>
    );
};