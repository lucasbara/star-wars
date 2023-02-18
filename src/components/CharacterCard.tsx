import { BiMaleSign, BiFemaleSign } from 'react-icons/bi';
import { GiBodyHeight, GiWeight } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { Avatar } from '@/components/Avatar';
import { useFilmsStore } from '@/store/films';
import { usePlanetsStore } from '@/store/planets';
import { formateDate } from '@/utils/dates';
import { Character } from '@/types/characters';

type CharacterCardVersion = 'list' | 'detail';

type CharacterCardProps = {
  character: Character;
  version: CharacterCardVersion;
};

export function CharacterCard({ character, version }: CharacterCardProps) {
  const { edited: editedDate, films, gender, height, homeworld, name, mass: weight } = character;

  const { films: allFilms } = useFilmsStore();
  const { planets } = usePlanetsStore();

  return (
    <li className="relative w-full h-full min-h-[15rem] min-w-[10rem] bg-white rounded-lg text-black m-5 shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
      <div className="w-full flex justify-around items-center text-lg text-violet text-center border-b border-violet p-2">
        <Avatar name={name} />
        <h2 className="text-lg text-violet pl-1">
          {name} ({planets[homeworld]})
        </h2>
      </div>
      <p className="w-full border-violet text-violet text-center font-bold">
        {version === 'detail' ? 'Information' : 'Films'}
      </p>
      {version === 'detail' && (
        <div className="w-full flex items-center justify-between text-light-grey text-lg px-2 py-1 border-b border-t border-white-darker">
          <div className="flex flex-col justify-center items-center">
            <GiBodyHeight className="mr-2" />
            <p className="text-sm">{height}cm</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            {gender === 'male' ? <BiMaleSign /> : <BiFemaleSign />}
            <p className="text-sm capitalize">{gender}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <GiWeight className="mr-2" />
            <p className="text-sm">{weight}kg</p>
          </div>
        </div>
      )}
      <div className="w-full flex-col justify-center items-center">
        {version === 'detail' && homeworld && (
          <p className="w-full bg-violet text-white text-center font-bold mx-auto">Films</p>
        )}
      </div>
      {films.map((film: string) => {
        return <p className="w-full text-xs text-center text-violet pl-1">{allFilms[film]}</p>;
      })}
      {version === 'detail' && (
        <p className="w-full absolute  bottom-0 bg-violet text-white text-sm rounded-b-lg text-right mx-auto">
          Last edited: {formateDate(editedDate)}
        </p>
      )}
      {version === 'list' && (
        <Link
          className="absolute text-center bottom-0 bg-violet w-full text-black py-2 rounded-b-lg px-4 hover:bg-light-violet transition duration-500 ease-in-out"
          to={`character/${name}`}
        >
          Learn more
        </Link>
      )}
    </li>
  );
}
