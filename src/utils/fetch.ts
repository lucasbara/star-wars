import { Character, CharacterApiResponse } from '@/types/characters';
import { FilmsApiResponse } from '@/types/films';
import { PlanetsApiResponse } from '@/types/planets';

export async function fetchCharacters(
  url: string = 'https://swapi.dev/api/people/',
): Promise<Array<Character>> {
  const response = await fetch(url);
  const data: CharacterApiResponse = await response.json();
  const characters = data.results;

  if (data.next) {
    const moreCharacters = await fetchCharacters(data.next);
    return [...characters, ...moreCharacters];
  }

  return characters;
}

export async function fetchFilms(
  url: string = 'https://swapi.dev/api/films/',
): Promise<Record<string, string>> {
  const response = await fetch(url);
  const data: FilmsApiResponse = await response.json();

  const films = data.results.reduce((acc: Record<string, string>, film) => {
    acc[film.url] = film.title;
    return acc;
  }, {});

  if (data.next) {
    const moreFilms = await fetchFilms(data.next);
    return { ...films, ...moreFilms };
  }

  return films;
}

export async function fetchPlanets(
  url: string = 'https://swapi.dev/api/planets/',
): Promise<Record<string, string>> {
  const response = await fetch(url);
  const data: PlanetsApiResponse = await response.json();

  const planets = data.results.reduce((acc: Record<string, string>, planet) => {
    acc[planet.url] = planet.name;
    return acc;
  }, {});

  if (data.next) {
    const morePlanets = await fetchPlanets(data.next);
    return { ...planets, ...morePlanets };
  }

  return planets;
}
