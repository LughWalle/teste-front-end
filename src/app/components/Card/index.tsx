import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';

const Card = ({ name, image, description, ...rest }: {
  name: string,
  image: string,
  description: string,
}) => {
  return (
    <div className={styles.container} {...rest}>
      <div className={styles.content}>
        <h1 className={styles.title}>{name}</h1>
        <div className={styles.about}>
          <Image style={{height: 'auto'}} src={image} alt={`${name} botle`} width={40} height={60} />
          <p className={styles.desc}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
