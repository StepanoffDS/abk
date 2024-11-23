import React from 'react';
import styles from './crm.module.scss';
import Image from 'next/image';

const crmBenefits = [
  {
    id: 1,
    image: '/icons/icon-4.svg',
    title: 'Преимущество',
    text: 'Инновационная CRM-система, разработанная специально для агентств',
  },
  {
    id: 2,
    image: '/icons/icon-4.svg',
    title: 'Преимущество',
    text: 'Инновационная CRM-система, разработанная специально для агентств',
  },
  {
    id: 3,
    image: '/icons/icon-4.svg',
    title: 'Преимущество',
    text: 'Инновационная CRM-система, разработанная специально для агентств',
  },
];

export const Crm = () => {
  return (
    <section className={`${styles['crm']} section-outer`}>
      <div className='container'>
        <div className={styles['inner']}>
          <header className={styles['header']}>
            <h2 className={`title-1 ${styles['title']}`}>
              <span>
                <span>Мы задумали</span> нечто особенное…{' '}
              </span>
              готовьтесь увидеть в ближайшее время
            </h2>
            <h3 className={styles['subtitle']}>АVK CRM </h3>
            <p className={styles['text']}>
              Инновационная CRM-система, разработанная специально для агентств
              жилой и коммерческой недвижимости. Простая и удобная автоматизация
              бизнес-процессов
            </p>
          </header>
          <main className={styles['body']}>
            <Image src={'/crm.png'} alt={'crm'} fill />
          </main>
          <footer className={styles['footer']}>
            {crmBenefits.map((item) => (
              <article className={styles['card']} key={item.id}>
                <div className={styles['card-image']}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={40}
                    height={40}
                  />
                </div>
                <h4 className={styles['card-title']}>{item.title}</h4>
                <p className={styles['card-text']}>{item.text}</p>
              </article>
            ))}
          </footer>
        </div>
      </div>
    </section>
  );
};
