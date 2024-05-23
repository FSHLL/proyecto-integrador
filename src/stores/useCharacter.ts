import { RapierRigidBody } from '@react-three/rapier';
import { MutableRefObject } from 'react';
import { create } from 'zustand';

type CharacterRef = MutableRefObject<RapierRigidBody | undefined> | null;

interface CharacterStore {
    characterRef: CharacterRef;
    setCharacterRef: (ref: CharacterRef) => void;
}


export const useCharacter = create<CharacterStore>((set) => ({
    characterRef: null,
    setCharacterRef: (ref) => set({ characterRef: ref }),
}))
