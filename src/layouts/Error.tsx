import { MdKeyboardArrowLeft } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Layout } from '@/layouts/Layout';

type ErrorProps = {
  code?: number;
  message: string;
};

export function Error({ code, message }: ErrorProps) {
  return (
    <Layout noFilters>
      <section className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-[10rem] text-violet font-bold">{code || 'Error'}</h1>
        <h2 className="font-bold">{message}</h2>
        <p className="mb-8">Hey captain! Looks like you're heading to a wrong planet!</p>
        <Link
          className="h-10 w-[10%] flex justify-between items-center mx-2 text-white bg-grey border-violet hover:bg-violet p-2 rounded-lg cursor-pointer border transition duration-300 ease-out"
          to="/"
        >
          <MdKeyboardArrowLeft className="text-xl mr-2" />
          Go back
        </Link>
      </section>
    </Layout>
  );
}
