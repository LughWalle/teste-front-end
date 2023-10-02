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
        <h1>{name}</h1>
        <div className={styles.img}>
          <Image className='object-cover' src={image} alt={`${name} botle`} width={40} height={60} />
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
