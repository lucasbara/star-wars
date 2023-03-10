import { MdKeyboardArrowLeft } from 'react-icons/md';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Layout } from '@/layouts/Layout';
import { CharacterCard } from '@/components/CharacterCard';
import { useCharactersStore } from '@/store/characters';

export function CharacterCardDetail() {
  const { name } = useParams<{ name: string }>();

  const { characters, isLoading } = useCharactersStore();

  const character = characters.find((character) => character.name === name);

  const history = useHistory();

  if (!character && !isLoading) {
    history.push('/not-found');
    return null;
  }

  return (
    <Layout>
      <section className="w-full h-full flex flex-col ">
        {character ? (
          <CharacterCard character={character} version="detail" />
        ) : (
          <div className="w-full h-full min-h-[15rem] min-w-[10rem] bg-white rounded-lg animate-pulse mb-4" />
        )}
        <Link
          className="h-10 w-[10%] flex justify-between items-center mx-2 text-white bg-grey border-violet hover:bg-violet p-2 ml-5 rounded-lg cursor-pointer border transition duration-300 ease-out"
          to="/"
        >
          <MdKeyboardArrowLeft className="text-xl mr-2" />
          Go back
        </Link>
      </section>
    </Layout>
  );
}
