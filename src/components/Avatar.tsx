import { formateName } from '@/utils/names';

type AvatarProps = {
  name: string;
};

export function Avatar({ name }: AvatarProps) {
  return (
    <div className="w-[4rem] h-[4rem] flex justify-center items-center bg-white-darker text-violet  text-xl rounded-full">
      {formateName(name)}
    </div>
  );
}
