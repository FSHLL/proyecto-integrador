import { Reward } from '@/Interfaces/Reward';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

export const gameStates = {
    MENU: "MENU",
    GAME: "GAME",
    GAME_OVER: "GAME_OVER",
};

interface GameStore {
    gameState: string;
    curLevel: number;
    lives: number;
    curHealth: number;
    rewards: Reward[];
    doDamage: (damage: number) => void;
    doHealth: (health: number) => void;
    setGameState: (state: string) => void;
    setRewords: (rewards: Reward[]) => void;
    addReword: (reward: Reward) => void;
    setCurLevel: (level: number) => void;
    reset: () => void;
}

const initialData = {
    gameState: gameStates.GAME,
    curLevel: 1,
    lives: 3,
    curHealth: 100,
    rewards: [],
}

export const useGame = create(
    persist<GameStore>(
        (set, get) => ({
            ...initialData,
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
            setRewords: (rewards) => set({ rewards: rewards }),
            addReword: (reward) => set({ rewards: [...get().rewards, reward] }),
            setCurLevel: (level) => set({ curLevel: level }),
            reset: () => set(initialData) 
        }),
        {
            name: 'game-storage',
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
)