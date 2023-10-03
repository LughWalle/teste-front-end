'use client';
import React, { useEffect, useRef, useState } from 'react';
import Button from '../Button';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Lugh from '@/lib/images/lugh.png';
import Link from 'next/link';
import cn from 'classnames';
import styles from './styles.module.scss';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();
  
  return (
    <header className={styles.header}>
      <ul>
        <li className={cn(styles.items, styles.title)}>
          <h1>Beers Brew</h1>
        </li>
        <li className={styles.items}>
          
        </li>
        <li className={cn(styles.sign, styles.items)}>
          <Image
            alt='image profile'
            src={session?.user?.image || Lugh}
            width={50}
            height={50}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen)
            }}
          />
          <div className={cn(styles.menu, { [styles.MenuOpen]: isMenuOpen })}>
            <Button type='link' className={styles.btn} href={'/beers'}>Cervejas</Button>
            {session ? (
              <Button variant='primary' className={styles.btn} onClick={() => {
                signOut()
                }}>
                signOut
              </Button>
            ) : (
              <Button className={styles.btn} href='/signin'>
                Login
              </Button>
            )}
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Nav;
