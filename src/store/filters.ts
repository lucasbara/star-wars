import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { FiltersState } from '@/types/filters';

export const useFiltersStore = create(
  persist<FiltersState>(
    (set) => ({
      search: '',
      setSearch: (newSearch) => set({ search: newSearch }),
      select: '',
      setSelect: (newSelection) => set({ select: newSelection }),
    }),
    { name: 'filters-storage' },
  ),
);
