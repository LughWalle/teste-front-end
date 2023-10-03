'use client';
import styles from './page.module.scss';
import { useContext } from 'react';
import { BeersContext } from './context/BeerContext';
import Card from './components/Card';

export default function Home() {
  const { randomB } = useContext(BeersContext);
  return (
    <main className={styles.main}>
      <h1>SEJA BEM VINDO</h1>
      <p>Aqui esta uma recomendação da casa!</p>
      <ul className={styles.card}>
        {randomB.map((b) => {
          return (
            <li key={`${b.name}-${b.description}`}>
              <Card
                name={b.name}
                image={b.image_url}
                description={b.description}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
