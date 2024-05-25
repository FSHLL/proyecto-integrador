import { Checkpoint } from '@/Interfaces/Checkpoint';
import { createCheckpoint } from '@/db/UserCheckpoints';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

interface CheckpointStore {
    curCheckpoint: Checkpoint|null;
    checkpoints: Checkpoint[];
    addCheckpoint: (checkpoint: Checkpoint) => void;
    setCurCheckpoint: (checkpoint: Checkpoint|null) => void;
}

export const useCheckpoint = create(
    persist<CheckpointStore>(
        (set, get) => ({
            curCheckpoint: null,
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