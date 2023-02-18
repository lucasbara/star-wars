import { create } from 'zustand';
import { Character, CharacterState } from '@/types/characters';
import { fetchCharacters } from '@/utils/fetch';

export const useCharactersStore = create<CharacterState>((set) => ({
  characters: [],
  error: null,
  isLoading: true,
  async setCharacters() {
    try {
      const characters = await fetchCharacters();
      set({ characters });
      set({ isLoading: false });
    } catch (error) {
      //@ts-ignore
      set({ error: error.message });
      set({ isLoading: false });
    }
  },
}));
