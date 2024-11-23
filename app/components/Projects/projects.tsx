import React from 'react';
import styles from './projects.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { projectsId } from '@/app/constants';

const tags = [
  'Аренда переговоров',
  'Юридические консультации',
  'Личный менеджер по подбору недвижимости',
  'Проведение сделок',
  'Рабочее пространство',
  'Курсы по недвижимости ',
];

export const Projects = () => {
  return (
    <section className={`${styles['projects']} section`} id={`${projectsId}`}>
      <div className='container'>
        <div className={styles['inner']}>
          <header className={styles['header']}>
            <h2 className={`title-1 ${styles['title']}`}>
              <span>Наши</span> проекты
            </h2>
          </header>
          <main className={styles['body']}>
            <div className={styles['col-1']}>
              <div className={`${styles['card']} ${styles['card--image']}`}>
                <div className={styles['card-image']}>
                  <Image src={'/hand.png'} alt={'hand'} fill />
                </div>
                <Link className={styles['button']} href='#!'>
                  Инвестировать
                </Link>
              </div>
              <div className={`${styles['card']} ${styles['card--image']}`}>
                <div className={styles['card-image']}>
                  <Image src={'/hand.png'} alt={'hand'} fill />
                </div>
                <Link
                  className={`${styles['button']} ${styles['button--accent']}`}
                  href='#!'
                >
                  Перейти на сайт
                </Link>
              </div>
              <div className={`${styles['card']} ${styles['card--content']}`}>
                <div className={styles['card-image']}>
                  <Image
                    src={'/sdam-prodam.png'}
                    alt={'sdam-prodam'}
                    width={324}
                    height={57}
                  />
                </div>
                <div className={styles['card-text']}>
                  <h3 className={styles['card-title']}>
                    Инновационная Площадка
                  </h3>
                  <p className={styles['card-desc']}>
                    Эта система упрощает и ускоряет процесс работы при решении
                    задач, связанных с реализацией объектов: от аналитики до
                    поиска, продажи и аренды помещений для бизнеса. Мир
                    коммерческой недвижимости открыт
                  </p>
                </div>
              </div>
            </div>
            <div className={styles['col-2']}>
              <div
                className={`${styles['card']} ${styles['card--content']} ${styles['card--big']}`}
              >
                <div className={styles['card-header']}>
                  <div className={styles['card-logo']}>
                    <Image
                      src={'/cron-logo.png'}
                      alt={'sdam-prodam'}
                      width={46}
                      height={44}
                    />
                    <h4 className={styles['card-logo-title']}>
                      <span>Центр реализации</span> объектов недвижимости
                    </h4>
                  </div>
                  <Image
                    className={styles['card-image']}
                    src={'/cron-text.png'}
                    alt={'sdam-prodam'}
                    width={145}
                    height={70}
                  />
                </div>
                <div className={styles['card-body']}>
                  <h3 className={styles['card-title']}>
                    Центр реализации объектов недвижимости
                  </h3>
                  <p className={styles['card-desc']}>
                    Твое пространство для работы с недвижимостью
                  </p>
                  <h3 className={styles['card-title']}>
                    Полное сопровождение сделок
                  </h3>
                  <div className={styles['tags']}>
                    {tags.map((item) => (
                      <div key={item} className={styles['tag']}>
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link href='#!' className={styles['link']}>
                    Стать частью системы
                  </Link>
                </div>
              </div>
              <div
                className={`${styles['card']} ${styles['card--image']} ${styles['card--big-image']}`}
              >
                <div className={styles['card-image']}>
                  <Image src={'/office.png'} alt={'hand'} fill />
                </div>
                <div className={styles['card-buttons']}>
                  <Link className={styles['button']} href='#!'>
                    Открыть филиал
                  </Link>
                  <Link
                    className={`${styles['button']} ${styles['button--accent']}`}
                    href='#!'
                  >
                    Перейти на сайт
                  </Link>
                </div>
              </div>
              <div className={styles['buttons-mobile']}>
                <Link className={styles['button']} href='#!'>
                  Инвестировать
                </Link>
                <Link
                  className={`${styles['button']} ${styles['button--accent']}`}
                  href='#!'
                >
                  Перейти на сайт
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};
