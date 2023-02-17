import { AiOutlineSearch } from 'react-icons/ai';

type InputProps = {
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
};

export function TextField({ name, onChange, placeholder }: InputProps) {
  return (
    <form className="flex items-center bg-grey h-10 w-[20%] text-white placeholder-light-grey p-2 rounded-lg  focus:outline-none">
      <label htmlFor="search">
        <AiOutlineSearch className="w-7" />
      </label>
      <input
        className="w-full bg-grey focus:outline-none"
        id="search"
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type="search"
      />
    </form>
  );
}
