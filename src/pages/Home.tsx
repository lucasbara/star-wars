import { useEffect, useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { CharactersList } from '@/components/CharactersList';
import { Layout } from '@/layouts/Layout';
import { Button } from '@/components/Button';
import { Select } from '@/components/Select';
import { TextField } from '@/components/TextField';
import { useCharactersStore } from '@/store/characters';
import { useFilmsStore } from '@/store/films';
import { usePlanetsStore } from '@/store/planets';
import { calculateTotalPages, charactersPerPage } from '@/utils/pages';

let searchTimeout: NodeJS.Timeout;

export function Home() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [selectedFilm, setSelectedFilm] = useState('');
  const { characters, error, isLoading, setCharacters } = useCharactersStore();
  const { films, setFilms } = useFilmsStore();
  const { setPlanets } = usePlanetsStore();

  useEffect(() => {
    setCharacters();
    setFilms();
    setPlanets();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [search, selectedFilm]);

  const totalPages =
    characters && !isLoading && calculateTotalPages(characters.length, charactersPerPage);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
      setSearch(event.target.value);
    }, 500);
  };

  const getDisplayedCharacters = () => {
    const startIndex = (page - 1) * charactersPerPage;
    const endIndex = startIndex + charactersPerPage;
    let displayedCharacters = characters.slice(startIndex, endIndex);
    if (search) {
      displayedCharacters = displayedCharacters.filter((character) =>
        character.name.toLowerCase().includes(search.toLowerCase()),
      );
    }
    if (selectedFilm && selectedFilm !== 'all' && selectedFilm !== 'Select a film...') {
      displayedCharacters = displayedCharacters.filter((character) =>
        character.films.includes(selectedFilm),
      );
    }
    return displayedCharacters;
  };

  const onPreviousPage = () => setPage(page - 1);

  const onNextPage = () => setPage(page + 1);

  return (
    <Layout>
      <section className="w-full h-full flex flex-col ">
        <div className="w-full flex justify-between items-center ml-6">
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
            value={selectedFilm}
            onChange={(event) => setSelectedFilm(event.target.value)}
            placeholder="Select a film..."
          />
        </div>
        {getDisplayedCharacters().length === 0 && !isLoading ? (
          <p className="h-full flex justify-center items-center">
            Oops! No characters found, captain!
          </p>
        ) : (
          <CharactersList data={getDisplayedCharacters()} error={error} isLoading={isLoading} />
        )}
        <div className="w-full flex justify-center items-center p-2 mt-10">
          <Button disabled={page === 1} onClick={onPreviousPage} type="button">
            <MdKeyboardArrowLeft className="text-xl" />
            Previous
          </Button>
          <Button
            disabled={page === totalPages || getDisplayedCharacters().length < charactersPerPage}
            onClick={onNextPage}
            type="button"
          >
            Next
            <MdKeyboardArrowRight className="text-xl" />
          </Button>
        </div>
      </section>
    </Layout>
  );
}
