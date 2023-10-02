'use client'
import React from 'react';
import Button from '../Button';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
    const { data: session } = useSession()
    console.log(session)
  return (
    <>
      <header className='header'>
        <h1>Beers Brew</h1>
        <Link href={'/beers'}>CERVAJAS</Link>
        {session && (
          <>
            <Button variant={'primary'} onClick={signOut}>
              signOut
            </Button>
            {/* <Image
              alt='image profile'
              src={session?.user?.image || ''}
              width={50}
              height={50}
            /> */}
          </>
        )}
      </header>
    </>
  );
};

export default Nav;
