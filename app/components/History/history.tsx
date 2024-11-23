import React from 'react';
import styles from './history.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { aboutId } from '@/app/constants';

export const History = () => {
  return (
    <section className={`${styles['history']} section`} id={aboutId}>
      <div className='container'>
        <div className={styles['inner']}>
          <header className={styles['header']}>
            <h2 className={`title-1 ${styles['title']}`}>
              <span className={styles['word-1']}>История</span>{' '}
              <span className={styles['word-2']}>слияния</span>
            </h2>
          </header>
          <main className={styles['body']}>
            <section className={styles['row-1']}>
              <div className={styles['col-1']}>
                <h3 className={styles['title-row']}>
                  Как пришла идея расширить?
                </h3>
                <p className={styles['par']}>
                  Кузьмина Анна Владимировна, основатель компании, которая на
                  тот момент работала уже более 10 лет в сфере коммерческой
                  недвижимости и не могла понять, почему рынок оказался
                  монополизирован одним сервисом и одной услугой. На платформах
                  было много объявлений, которые были неформальными странными и
                  не имели логику подачи информации, а сам процесс
                  взаимодействия и оформления документов занимал много времени и
                  был сложным как для агентов, так и для тех, кто ищет
                  недвижимость.
                </p>
                <p className={styles['par']}>
                  В 2022 году появилась идея, которая способна изменить рынок.
                  Мы решили создать экосистему, которая значительно упростит
                  работу агентов по недвижимости, развитологов и частных лиц в
                  реализации объектов
                </p>
              </div>
              <div className={styles['col-2']}>
                <Image
                  src={'/history-1.png'}
                  alt={'history'}
                  width={792}
                  height={526}
                />
              </div>
            </section>
            <section className={styles['row-2']}>
              <div className={styles['col-1']}>
                <div className={styles['image-1']}>
                  <Image
                    src={'/history-2.png'}
                    alt={'history'}
                    width={255}
                    height={382}
                  />
                </div>
                <div className={styles['image-2']}>
                  <Image
                    src={'/history-3.png'}
                    alt={'history'}
                    width={255}
                    height={382}
                  />
                </div>
              </div>
              <div className={styles['col-2']}>
                <h3 className={styles['title-row']}>Что из этого вышло?</h3>
                <p className={styles['par']}>
                  Андрей Р. находился в поиске помещения для развития своей
                  IT-компании. Так совпало, что Анна Владимировна оказалась в
                  нужное время в нужном месте, когда раздался звонок с
                  предложением о заказе на помещения для IT-компании. Узнав о
                  планах Андрея по расширению команды, она предложила идею
                  платформы, которая могла бы быть полезна людям. На следующий
                  день они встретились в офисе и начали активно обсуждать детали
                  разработки{' '}
                  <Link href='https://sdam-prodam.com/'>
                    www.sdam-prodam.com
                  </Link>
                  . А днем спустя появился
                  <Image
                    src={'/reiterovich.svg'}
                    alt={'reiterovich & lab'}
                    width={167}
                    height={24}
                  />
                </p>
              </div>
            </section>
            <section className={styles['row-3']}>
              <div className={styles['col-1']}>
                <Image
                  src={'/history-4.png'}
                  alt={'history'}
                  width={792}
                  height={526}
                />
              </div>
              <div className={styles['col-2']}>
                <h3 className={styles['title-row']}>Как теперь удобно </h3>
                <p className={styles['par']}>
                  В первые же дни своего существования сервис «Сдам Продам»
                  столкнулся с высокой конкуренцией. В это непростое время на
                  помощь пришли замечательные ребята из агентства по рекламе
                  «Два Ивана». Они разработали и запустили рекламную кампанию,
                  которая помогла решить эту проблему и успешно запустить
                  платформу. <br /> 24 марта 2024 года в офисе АВК- ГРУПП
                  состоялось торжественное открытие бутылки шампанского,
                  символизирующее первую сотню регистраций на платформе. С этого
                  момента маркетинговое сопровождение всех наших проектов стало
                  заботой агентства «Два Ивана» которое путем слияния с
                  АВК-ГРУПП стало называться VKLIK - рекламное пространство.
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </section>
  );
};
