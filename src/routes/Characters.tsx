import { Card, Flex } from 'antd';
import Meta from 'antd/es/card/Meta';
import { buziraco, priest, warrior } from '../constants/characters';
import { Buziraco } from '@/models/Buziraco';
import { CharacterPresenter } from '../components/CharacterPresenter';
import { Priest } from '@/models/Priest';
import { Warrior } from '@/models/Warrior';

export const Characters = () => (
    <Flex gap="middle" wrap="wrap">
        <Card
            cover={
                <CharacterPresenter>
                    <Priest withAnimations/>
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
    </Flex>
);