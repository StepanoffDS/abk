import React from 'react';
import styles from './smi.module.scss';
import Image from 'next/image';
import { newsId } from '@/app/constants';

const cards = [
  {
    id: 1,
    title: 'Как теперь удобно ',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
    image: '/smi-1.png',
  },
  {
    id: 2,
    title: 'Как теперь удобно ',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
    image: '/smi-2.png',
  },
  {
    id: 3,
    title: 'Как теперь удобно ',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
    image: '/smi-3.png',
  },
];

export const Smi = () => {
  return (
    <section className={`${styles['crm']} section`} id={newsId}>
      <div className='container'>
        <div className={styles['inner']}>
          <header className={styles['header']}>
            <h2 className={`title-1 ${styles['title']}`}>
              <span>СМИ </span>о нас
            </h2>
          </header>
          <main className={styles['body']}>
            {cards.map((item) => (
              <article className={styles['card']} key={item.id}>
                <div className={styles['card-image']}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={408}
                    height={544}
                  />
                </div>
                <h4 className={styles['card-title']}>{item.title}</h4>
                <p className={styles['card-text']}>{item.desc}</p>
              </article>
            ))}
          </main>
        </div>
      </div>
    </section>
  );
};
