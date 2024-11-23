import React from 'react';
import styles from './benefits.module.scss';
import Image from 'next/image';

const benefits = [
  {
    id: 1,
    image: '/icons/icon-1.svg',
    title: 'Умные процессы',
    accent: false,
  },
  {
    id: 2,
    image: '/icons/icon-2.svg',
    title: 'Точный прогноз',
    accent: false,
  },

  {
    id: 3,
    image: '/icons/icon-3.svg',
    title:
      'Расширь свой бизнес, используя цифровые инструменты для поиска партнеров и клиентов',
    accent: true,
  },

  {
    id: 4,
    image: '/icons/icon-4.svg',
    title: 'Глобальный уровень',
    accent: false,
  },
];

export const Benefits = () => {
  return (
    <section className={`${styles['benefits']} section`}>
      <div className='container'>
        <div className={styles['inner']}>
          <header className={styles['header']}>
            <h2 className={`title-1 ${styles['title']}`}>
              Не просто "цифра" а новая реальность!
            </h2>
            <p className={styles['text']}>
              С нами ты не просто "перейдешь в цифру", а взлетишь на новую
              высоту!
            </p>
          </header>
          <main className={styles['body']}>
            {benefits.map((item) => (
              <article
                key={item.id}
                className={`${styles['card']} ${
                  item.accent ? styles['card--accent'] : ''
                }`}
              >
                <div className={styles['card-image']}>
                  <Image
                    src={item.image}
                    alt={'benefits-1'}
                    width={41}
                    height={41}
                  />
                </div>
                <h4 className={styles['card-text']}>{item.title}</h4>
              </article>
            ))}
          </main>
        </div>
      </div>
    </section>
  );
};
