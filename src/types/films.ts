export type Film = {
  title: string;
  url: string;
};

export type FilmsApiResponse = {
  results: Array<Film>;
  next: string | null;
};

export type FilmsState = {
  films: Record<string, string>;
  setFilms: () => void;
};
