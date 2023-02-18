import { CharacterCard } from '@/components/CharacterCard';
import { Error } from '@/layouts/Error';
import { Character } from '@/types/characters';

type CharactersListProps = {
  data: Array<Character>;
  isLoading: boolean;
  error: unknown;
};

export function CharactersList({ data, isLoading, error }: CharactersListProps) {
  if (error) {
    //@ts-ignore
    return <Error message={error?.message} />;
  }
  return (
    <section className="h-full w-full flex justify-center items-start">
      <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {isLoading
          ? new Array(10).fill('').map((_, idx) => {
              return (
                <li
                  key={idx}
                  className="animate-pulse w-full h-[15rem] bg-white rounded-lg p-4"
                ></li>
              );
            })
          : data.map((character) => (
              <CharacterCard key={character.url} character={character} version="list" />
            ))}
      </ul>
    </section>
  );
}
