export type Planet = {
  url: string;
  name: string;
};

export type PlanetsApiResponse = {
  results: Planet[];
  next: string | null;
};

export type PlanetsState = {
  planets: Record<string, string>;
  setPlanets: () => void;
};
