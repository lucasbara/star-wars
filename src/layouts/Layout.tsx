import { useEffect, ReactNode } from 'react';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Select } from '@/components/Select';
import { TextField } from '@/components/TextField';
import { useCharactersStore } from '@/store/characters';
import { useFiltersStore } from '@/store/filters';
import { useFilmsStore } from '@/store/films';
import { usePlanetsStore } from '@/store/planets';

type LayoutProps = {
  children: ReactNode;
};

let searchTimeout: NodeJS.Timeout;

export function Layout({ children }: LayoutProps) {
  const { characters, setCharacters } = useCharactersStore();
  const { search, setSearch, select, setSelect } = useFiltersStore();
  const { films, setFilms } = useFilmsStore();
  const { setPlanets } = usePlanetsStore();

  useEffect(() => {
    setCharacters();
    setFilms();
    setPlanets();
  }, []);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
      setSearch(event.target.value);
    }, 500);
  };
  return (
    <div className="w-full max-w-[80vw] mx-auto h-screen flex flex-col py-2">
      <Header />
      <div className="w-full flex justify-center md:justify-between items-center pt-2 md:pt-0 pl-11">
        <TextField
          name="search"
          onChange={onChange}
          placeholder="Search for a character..."
          value={search}
        />
        <Select
          options={Object.entries(films).filter(([url]) =>
            characters.some((character) => character.films.includes(url)),
          )}
          value={select}
          onChange={(event) => setSelect(event.target.value)}
          placeholder="Select a film..."
        />
      </div>
      <main className="flex-1 p-6">{children}</main>
      <Footer />
    </div>
  );
}
