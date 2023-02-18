type SelectProps = {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<any>;
  placeholder: string;
  value: string;
};

export function Select({ onChange, options, placeholder, value }: SelectProps) {
  return (
    <select
      className="bg-grey w-[20%] h-10 text-white placeholder-light-grey p-2 rounded-lg focus:outline-none mx-2"
      value={value}
      onChange={onChange}
    >
      <option value={placeholder}>{placeholder}</option>
      <option value="all">All</option>
      {options.map((option) => {
        const [url, title] = option;
        return (
          <option key={url} value={url}>
            {title}
          </option>
        );
      })}
    </select>
  );
}
