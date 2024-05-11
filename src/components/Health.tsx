import { useHealth } from "@/stores/useHealth";
import { Progress, Statistic } from "antd";

export const Health = () => {
    const curHealth = useHealth((state) => state.curHealth)
    const lives = useHealth((state) => state.lives)

    return (
        <>
            <div style={{ width: 300, backgroundColor: 'white' }}>
                <Statistic style={{ textAlign: 'center' }} title="Vidas" value={lives} />
                <Progress percent={curHealth} status="active" />
            </div>
        </>
    );
};
