import { create } from 'zustand';
import { Character } from '@/types/fetch';
import { fetchCharacters } from '@/utils/fetch';

type State = {
  characters: Character[];
  error: unknown | null;
  isLoading: boolean;
  setCharacters: () => void;
};

export const useCharactersStore = create<State>((set) => ({
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
