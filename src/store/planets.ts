import { create } from 'zustand';
import { fetchPlanets } from '@/utils/fetch';
import { PlanetsState } from '@/types/planets';

export const usePlanetsStore = create<PlanetsState>((set) => ({
  planets: {},
  async setPlanets() {
    const planets = await fetchPlanets();
    set({ planets });
  },
}));
