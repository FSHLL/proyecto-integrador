export const getRandomArbitrary = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
};

export const getMachineId = () => {
    let machineId = localStorage.getItem('MachineId');

    if (!machineId) {
        machineId = crypto.randomUUID();
        localStorage.setItem('MachineId', machineId);
    }

    return machineId;
}
