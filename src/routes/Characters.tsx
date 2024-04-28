import { Card, Flex } from 'antd';
import Meta from 'antd/es/card/Meta';
import { buziraco, candileja, demon, priest, warrior } from '../constants/characters';
import { Buziraco } from '@/models/Buziraco';
import { CharacterPresenter } from '../components/CharacterPresenter';
// import { Priest } from '@/models/Priest';
import { Warrior } from '@/models/Warrior';
import { PriestD } from '@/models/PriestD';

export const Characters = () => (
    <Flex gap="middle" wrap="wrap">
        <Card
            cover={
                <CharacterPresenter>
                    <PriestD />
                </CharacterPresenter>
            }
        >
            <Meta
            title={priest.name}
            description={priest.description}
            />
        </Card>

        <Card
            cover={
                <CharacterPresenter>
                    <Warrior withAnimations/>
                </CharacterPresenter>
            }
        >
            <Meta
            title={warrior.name}
            description={warrior.description}
            />
        </Card>

        <Card
            cover={
                <CharacterPresenter>
                    <Buziraco withAnimations/>
                </CharacterPresenter>
            }
        >
            <Meta
            title={buziraco.name}
            description={buziraco.description}
            />
        </Card>

        <Card
            cover={
                <CharacterPresenter>
                    <Buziraco withAnimations/>
                </CharacterPresenter>
            }
        >
            <Meta
            title={demon.name}
            description={demon.description}
            />
        </Card>

        <Card
            cover={
                <CharacterPresenter>
                    <Buziraco withAnimations/>
                </CharacterPresenter>
            }
        >
            <Meta
            title={candileja.name}
            description={candileja.description}
            />
        </Card>
    </Flex>
);