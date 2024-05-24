import { useGame } from "@/stores/useGame";
import { Progress, Statistic } from "antd";

export const Health = () => {
    const curHealth = useGame((state) => state.curHealth)
    const lives = useGame((state) => state.lives)

    return (
        <>
            <div style={{ width: 300, backgroundColor: 'white' }}>
                <Statistic style={{ textAlign: 'center' }} title="Vidas" value={lives} />
                <Progress percent={curHealth} status="active" />
            </div>
        </>
    );
};
