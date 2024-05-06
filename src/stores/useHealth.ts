import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

interface HealthStore {
    lives: number;
    curHealth: number;
    doDamage: (damage: number) => void;
    doHealth: (health: number) => void;
}

export const useHealth = create(
    persist<HealthStore>(
        (set, get) => ({
            lives: 3,
            curHealth: 100,
            doDamage: (damage) => set({ curHealth: get().curHealth - damage }),
            doHealth: (health) => set({ curHealth: get().curHealth + health }),
        }),
        {
            name: 'health-storage',
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
)