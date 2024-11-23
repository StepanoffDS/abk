import React from 'react';
import styles from './footer.module.scss';
import { Logo } from '..';
import Link from 'next/link';
import { links } from '@/app/constants';

export const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className='container'>
        <div className={styles['inner']}>
          <Logo />
          <nav className={styles['nav']}>
            <ul className={styles['list']}>
              {links.map((item) => (
                <li key={item.id} className={styles['item']}>
                  <Link className={styles['link']} href={item.href}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link className={styles['phone']} href={'tel:88000000000'}>
            8 800 000 00 00
          </Link>
        </div>
        <Link href='#!' className={styles['policy']}>
          Политика конфиденциальности
        </Link>
      </div>
    </footer>
  );
};
