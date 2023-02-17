import { Link } from 'react-router-dom';
import StarsWarsLogoSVG from '@/assets/images/star-wars-logo.png';

export function Header() {
  return (
    <header className="w-full flex justify-center items-center">
      <Link to="/">
        <img alt="Logo | Star Wars" className="max-w-[150px] fill-red" src={StarsWarsLogoSVG} />
      </Link>
    </header>
  );
}
