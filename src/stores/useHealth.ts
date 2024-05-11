import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

export const gameStates = {
    MENU: "MENU",
    GAME: "GAME",
    GAME_OVER: "GAME_OVER",
};

interface HealthStore {
    gameState: string;
    lives: number;
    curHealth: number;
    doDamage: (damage: number) => void;
    doHealth: (health: number) => void;
    setGameState: (state: string) => void;
}

export const useHealth = create(
    persist<HealthStore>(
        (set, get) => ({
            gameState: gameStates.GAME,
            lives: 3,
            curHealth: 100,
            doDamage: (damage) => {
                set({ curHealth: get().curHealth - damage })
                if (get().curHealth <= 0) {
                    set({lives: get().lives - 1})
                    if (get().lives > 0) {
                        set({curHealth: 100})
                    } else {
                        set({gameState: gameStates.GAME_OVER})
                    }
                }
            },
            doHealth: (health) => set({ curHealth: get().curHealth + health }),
            setGameState: (state) => set({ gameState: state }),
        }),
        {
            name: 'health-storage',
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
)