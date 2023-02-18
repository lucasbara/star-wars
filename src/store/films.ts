import { create } from 'zustand';
import { fetchFilms } from '@/utils/fetch';
import { FilmsState } from '@/types/films';

export const useFilmsStore = create<FilmsState>((set) => ({
  films: {},
  async setFilms() {
    const films = await fetchFilms();
    set({ films });
  },
}));
