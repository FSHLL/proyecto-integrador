import { RapierRigidBody } from '@react-three/rapier';
import { create } from 'zustand';

interface characterStore {
    characterRef?: RapierRigidBody | undefined | null ,
    setCharacterRef: (ref: RapierRigidBody | undefined |null ) => void,
}

export const useCharacter = create<characterStore>((set) => ({
    characterRef: null,
    setCharacterRef: (ref) => set({ characterRef: ref }),
}));
