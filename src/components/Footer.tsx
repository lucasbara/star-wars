import { AiFillHeart } from 'react-icons/ai';
import { BiCodeAlt } from 'react-icons/bi';
import { DiReact } from 'react-icons/di';

export function Footer() {
  const space = 'mx-1';
  return (
    <footer className="w-full h-20 flex justify-center items-center pt-10">
      <p className="flex justify-center items-center">
        <BiCodeAlt className={space} />
        with
        <AiFillHeart className={space} /> by
        <a href="https://github.com/lucasbara" className={space} target="_blank">
          Lucas Barallobre
        </a>
        using
        <DiReact className={space} />
      </p>
    </footer>
  );
}
