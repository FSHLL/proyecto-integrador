import { Vector3 } from 'three';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

interface Checkpoint {
    id:number
    level: number;
    score: number;
    position: Vector3;
    timestamp: number;
}

interface CheckpointStore {
    curCheckpoint: Checkpoint;
    checkpoints: Checkpoint[];
    addCheckpoint: (checkpoint: Checkpoint) => void;
    setCurCheckpoint: (checkpoint: Checkpoint) => void;
}

export const useCheckpoint = create(
    persist<CheckpointStore>(
        (set, get) => ({
            curCheckpoint: {} as Checkpoint,
            checkpoints: [],
            addCheckpoint: (checkpoint) => set({ checkpoints: [...get().checkpoints, checkpoint] }),
            setCurCheckpoint: (checkpoint) => set({ curCheckpoint: checkpoint }),
        }),
        {
            name: 'checkpoint-storage',
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
)