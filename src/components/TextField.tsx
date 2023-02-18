import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';

type InputProps = {
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
};

export function TextField({ name, onChange, placeholder, value }: InputProps) {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange && onChange(event);
  };

  return (
    <form className="flex items-center bg-grey h-10 w-[20%] min-w-[10rem] text-white placeholder-light-grey p-2 rounded-lg  focus:outline-none">
      <label htmlFor="search">
        <AiOutlineSearch className="w-7" />
      </label>
      <input
        className="w-full bg-grey focus:outline-none"
        id="search"
        name={name}
        onChange={handleInputChange}
        placeholder={placeholder}
        defaultValue={inputValue}
        type="search"
      />
    </form>
  );
}
