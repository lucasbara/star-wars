import { ReactNode } from 'react';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full max-w-[80vw] mx-auto h-screen flex flex-col py-2">
      <Header />
      <main className="flex-1 p-6">{children}</main>
      <Footer />
    </div>
  );
}
