import React from 'react';
import { Card, Flex } from 'antd';
import Meta from 'antd/es/card/Meta';
import { buziraco, priest, warrior } from '../constants/characters';
import { Buziraco } from '../models/Buziraco';
import { CharacterPresenter } from '../components/CharacterPresenter';
import { Priest } from '../models/Priest';

export const Characters = () => (
    <Flex gap="middle" wrap="wrap">
        <Card
            cover={
                <CharacterPresenter>
                    <Priest position-y={-1} withAnimations/>
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
            <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
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
                    <Buziraco position-y={-1.8} withAnimations/>
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