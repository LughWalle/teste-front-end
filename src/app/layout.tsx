import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Provider from '@/app/components/Provider';
import Nav from '@/app/components/Nav';
import './styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Beer brew',
  description: 'An app about beer',
};

export default function RootLayout({
  children,
  auth,
}: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Provider>
          <Nav />
          <main>{children}</main>
          {auth}
        </Provider>
      </body>
    </html>
  );
}
