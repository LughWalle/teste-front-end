'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getBeers } from '../api/server.js';
import Card from '@/app/components/Card';
import styles from './styles.module.scss';

const Beers = () => {
  const [beers, setBeers] = useState([]);
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login?callbackUrl=/beers');
    },
  });

  const beersList = async () => {
    const b = await getBeers().then((res) => {
      setBeers(res);
    });
  };
  useEffect(() => {
    beersList();
  }, []);

  console.log('tadjofv,d', beers);

  getBeers();
  return (
    <main>
      <input type='text' placeholder='search' />
      <section className={styles.cards}>
        <ul>
          {beers?.map(({ name, image_url, description }) => (
            <li key={`${name}${image_url}`}>
              <Card
                name={name}
                image={image_url}
                description={description}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Beers;
