'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import Card from '@/app/components/Card';
import styles from './styles.module.scss';
import { BeersContext } from '../context/BeerContext';
import Button from '../components/Button';

const Beers = () => {
  const { getBeers, allBeers, pages, msgError } = useContext(BeersContext);
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login?callbackUrl=/beers');
    },
  });

  useEffect(() => {
		getBeers(pages)	
	}, [])

  return (
    <main className={styles.container}>
      <input type='text' placeholder='search' />
      <section className={styles.section}>
        <ul className={styles.cards}>
          {allBeers?.map(({ name, image_url, description }) => (
            <li key={`${name}${image_url}`}>
              <Card
                name={name}
                image={image_url}
                description={description}
              />
            </li>
          ))}
        </ul>
        {
          msgError ? <p>{msgError}</p> : <Button className={styles.btnMore} onClick={() => getBeers(pages)} >MAIS</Button>

        }
      </section>
    </main>
  );
};

export default Beers;
