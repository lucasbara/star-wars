import StarsWarsLogoSVG from '@/assets/images/star-wars-logo.png';
import { TextField } from '@/components/TextField';

export function Header() {
  return (
    <header className="w-full flex justify-between items-center">
      <img alt="Logo | Star Wars" className="max-w-[150px] fill-red" src={StarsWarsLogoSVG} />
      <TextField name="search" placeholder="Search for a character..." />
    </header>
  );
}
