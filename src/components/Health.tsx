import { useHealth } from "@/stores/useHealth";
import { Progress } from "antd";

export const Health = () => {
    const curHealth = useHealth((state) => state.curHealth)

    return (
        <>
            <div style={{ width: 200 }}>
                <Progress percent={curHealth} status="active" />
            </div>
        </>
    );
};
