import React from 'react';
import styles from './hero.module.scss';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className={styles['hero']}>
      <div className='container'>
        <div className={styles['inner']}>
          <h1 className={styles['title']}>
            Цифровая <span className={styles['gray']}>трансформация</span>{' '}
            <span className={styles['accent']}>бизнеса</span>
          </h1>
          <div className={styles['image']}>
            <Image
              src={'/hero.png'}
              alt={'hero'}
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
