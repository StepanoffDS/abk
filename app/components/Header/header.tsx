'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './header.module.scss';
import { Logo } from '..';
import { links } from '@/app/constants';
import Image from 'next/image';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('opened');
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
    document.body.classList.remove('opened');
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      menuRef.current &&
      !(menuRef.current as HTMLElement).contains(event.target as Node)
    ) {
      handleMenuItemClick();
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  return (
    <header className={styles['header']} ref={menuRef}>
      <div className='container'>
        <div className={`${styles['inner']} ${isOpen ? styles.active : ''}`}>
          <Logo />
          <nav className={styles['nav']}>
            <ul className={`${styles['list']} ${isOpen ? styles.active : ''}`}>
              {links.map((item) => (
                <li key={item.id} className={styles['item']}>
                  <Link
                    className={styles['link']}
                    href={item.href}
                    onClick={handleMenuItemClick}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              className={`${styles['burger']} ${
                isOpen ? styles['active'] : ''
              }`}
              onClick={toggleMenu}
            >
              <span className={styles['bar']}></span>
              <span className={styles['bar']}></span>
              <span className={styles['bar']}></span>
            </button>
          </nav>

          <Link className={styles['phone']} href={'tel:88000000000'}>
            <span>8 800 000 00 00</span>
            <Image
              src={'/icons/phone-2.svg'}
              alt={'phone'}
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>
    </header>
  );
};
