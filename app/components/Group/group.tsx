import React from 'react';
import styles from './group.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const Group = () => {
  return (
    <section className={`${styles['benefits']} section`}>
      <div className='container'>
        <div className={styles['inner']}>
          <header className={styles['header']}>
            <h2 className={`title-1 ${styles['title']}`}>
              АВК ГРУПП в состав которого входит
            </h2>
          </header>
          <main className={styles['body']}>
            <div className={`${styles['row']} ${styles['row-1']}`}>
              <article className={`${styles['card']}`}>
                <div
                  className={`${styles['card-logo']} ${styles['card-logo--vklik']}`}
                >
                  Vklik
                </div>
                <p className={styles['card-text']}>
                  Рекламное агентство полного цикла. Мы знаем о рекламе всё и
                  даже больше! Мы увеличиваем продажи и делаем ваш бренд
                  узнаваемым
                </p>
                <Link
                  href='#!'
                  className={`${styles['card-link']} ${styles['card-link--disabled']}`}
                >
                  Совсем скоро
                </Link>
              </article>
              <article className={`${styles['card']}`}>
                <div
                  className={`${styles['card-logo']} ${styles['card-logo--reiterovich']}`}
                >
                  <Image
                    src={'/reiterovich.svg'}
                    alt={'reiterovich & lab'}
                    width={280}
                    height={41}
                  />
                </div>
                <p className={styles['card-text']}>
                  Рекламное агентство полного цикла. Мы знаем о рекламе всё и
                  даже больше! Мы увеличиваем продажи и делаем ваш бренд
                  узнаваемым
                </p>
                <Link
                  href='#!'
                  className={`${styles['card-link']} ${styles['card-link--disabled']}`}
                >
                  Совсем скоро
                </Link>
              </article>
            </div>
            <div className={`${styles['row']} ${styles['row-2']}`}>
              <article className={`${styles['card']}`}>
                <div
                  className={`${styles['card-logo']} ${styles['card-logo--vklik']}`}
                >
                  <Image
                    src={'/sdam-prodam.png'}
                    alt={'sdam-prodam'}
                    width={261}
                    height={45}
                  />
                </div>
                <p className={styles['card-text']}>Сервис для недвижимости</p>
                <Link
                  href='#!'
                  className={`${styles['card-link']} ${styles['card-link--disabled']}`}
                >
                  Совсем скоро
                </Link>
              </article>
              <article className={`${styles['card']}`}>
                <div className={styles['card-logo']}>
                  <Image
                    src={'/cron-text.png'}
                    alt={'cron'}
                    width={145}
                    height={70}
                  />
                </div>
                <p className={styles['card-text']}>
                  Центр реализации объектов недвижимости
                </p>
                <Link
                  href='#!'
                  className={`${styles['card-link']} ${styles['card-link--disabled']}`}
                >
                  Совсем скоро
                </Link>
              </article>
              <article className={`${styles['card']}`}>
                <div
                  className={`${styles['card-logo']} ${styles['card-logo--AVK-CRM']}`}
                >
                  AVK-CRM
                </div>
              </article>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};
