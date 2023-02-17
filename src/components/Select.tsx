type SelectProps = {
  options: Array<any>;
};

export function Select({ options }: SelectProps) {
  return (
    <select className="bg-grey w-[20%] h-10 text-white placeholder-light-grey p-2 rounded-lg  focus:outline-none mx-2">
      <option value="1">Select a...</option>
      {options.map((option, idx) => {
        const { title } = option;
        return (
          <option key={title} value={idx}>
            {title}
          </option>
        );
      })}
    </select>
  );
}
