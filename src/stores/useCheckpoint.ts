import { Checkpoint } from '@/Interfaces/Checkpoint';
import { createCheckpoint } from '@/db/UserCheckpoints';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

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
            addCheckpoint: (checkpoint) => {
                set({ checkpoints: [...get().checkpoints, checkpoint] })
                createCheckpoint(checkpoint)
            },
            setCurCheckpoint: (checkpoint) => set({ curCheckpoint: checkpoint }),
        }),
        {
            name: 'checkpoint-storage',
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
)