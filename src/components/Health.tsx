import { rewards } from "@/constants/rewards";
import { useGame } from "@/stores/useGame";
import { Col, Progress, Row, Statistic } from "antd";
import { useEffect, useState } from "react";

export const Health = () => {
    const curHealth = useGame((state) => state.curHealth)
    const lives = useGame((state) => state.lives)
    const curRewards = useGame((state) => state.rewards)
    const curLevel = useGame((state) => state.curLevel)

    const [levelRewards, setLevelRewards] = useState(0)

    useEffect(() => {
        setLevelRewards(rewards.filter((r) => r.level === curLevel).length)
    }, [levelRewards, curLevel])

    return (
        <>
            <div style={{ width: 320, backgroundColor: 'white' }}>
                <Row>
                    <Col span={12}>
                        <Statistic style={{ textAlign: 'center' }} title="Vidas" value={lives} />
                    </Col>
                    <Col span={12}>
                        <Statistic title="Recompensas" value={curRewards.length} suffix={`/ ${levelRewards}`} />
                    </Col>
                </Row>
                <Progress percent={curHealth} status="active" />
            </div>
        </>
    );
};
