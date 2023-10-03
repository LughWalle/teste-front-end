'use client';
import { SessionProvider } from 'next-auth/react';
import { BeersProvider } from '../context/BeerContext';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <BeersProvider>
      <SessionProvider>{children}</SessionProvider>
    </BeersProvider>
  );
};

export default Provider;
