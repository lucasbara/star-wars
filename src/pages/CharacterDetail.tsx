import { useState } from 'react';
import { Layout } from '@/layouts/Layout';
import { TextField } from '@/components/TextField';
import { useHistory, useParams } from 'react-router-dom';
import { CharacterCard } from '@/components/CharacterCard';
import { useCharactersStore } from '@/store/characters';

let searchTimeout: NodeJS.Timeout;

export function CharacterCardDetail() {
  const [search, setSearch] = useState('');

  const { name } = useParams<{ name: string }>();

  const { characters } = useCharactersStore();

  const character = characters.find((character) => character.name === name);

  const history = useHistory();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
      setSearch(event.target.value);
    }, 500);
  };

  if (!character) {
    history.push('/not-found');
    return null;
  }

  return (
    <Layout>
      <section className="w-full h-full flex flex-col ">
        <div className="w-full flex justify-center items-center">
          <TextField
            name="search"
            onChange={onChange}
            placeholder="Search for a character..."
            value={search}
          />
        </div>
        <CharacterCard character={character} version="detail" />
      </section>
    </Layout>
  );
}
