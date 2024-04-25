import React from 'react';
import { Card, Flex } from 'antd';
import Meta from 'antd/es/card/Meta';
import { buziraco, priest, warrior } from '../constants/characters';

export const Characters = () => (
    <Flex gap="middle" wrap="wrap">
        <Card
            cover={
            <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
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
            <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
            }
        >
            <Meta
            title={buziraco.name}
            description={buziraco.description}
            />
        </Card>
    </Flex>
);