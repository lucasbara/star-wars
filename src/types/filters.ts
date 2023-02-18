export type FiltersState = {
  search: string;
  setSearch: (newSearch: string) => void;
  select: string;
  setSelect: (newSelection: string) => void;
};
