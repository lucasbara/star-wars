import { useEffect, useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { CharactersList } from '@/components/CharactersList';
import { Layout } from '@/layouts/Layout';
import { Button } from '@/components/Button';
import { useCharactersStore } from '@/store/characters';
import { useFilmsStore } from '@/store/films';
import { useFiltersStore } from '@/store/filters';
import { usePlanetsStore } from '@/store/planets';
import { calculateTotalPages, charactersPerPage } from '@/utils/pages';

export function Home() {
  const [page, setPage] = useState(1);

  const { search, select } = useFiltersStore();

  const { characters, error, isLoading } = useCharactersStore();

  useEffect(() => {
    setPage(1);
  }, [search, select]);

  const totalPages =
    characters && !isLoading && calculateTotalPages(characters.length, charactersPerPage);

  const getDisplayedCharacters = () => {
    const startIndex = (page - 1) * charactersPerPage;
    const endIndex = startIndex + charactersPerPage;

    let displayedCharacters = characters.slice(startIndex, endIndex);

    if (search) {
      displayedCharacters = displayedCharacters.filter((character) =>
        character.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (select && select !== 'all' && select !== 'Select a film...') {
      displayedCharacters = displayedCharacters.filter((character) =>
        character.films.includes(select),
      );
    }

    return displayedCharacters;
  };

  const onPreviousPage = () => setPage(page - 1);

  const onNextPage = () => setPage(page + 1);

  return (
    <Layout>
      <section className="w-full h-full flex flex-col ">
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
