import React from 'react';
import styles from './contacts.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { contactsId } from '@/app/constants';

export const Contacts = () => {
  return (
    <section className={`${styles['contacts']} section`} id={contactsId}>
      <div className='container'>
        <div className={styles['inner']}>
          <Link href='tel:88000000000' className={styles['phone']}>
            <div className={styles['phone-icon']}>
              <Image
                src={'/icons/phone.svg'}
                alt={'phone'}
                width={34}
                height={34}
              />
            </div>
            8 800 000 00 00
          </Link>
          <div className={styles['links']}>
            <Link href='#!' className={styles['link']}>
              <Image
                src={'/icons/link.svg'}
                alt={'link'}
                width={41}
                height={41}
              />
            </Link>
            <Link href='#!' className={styles['link']}>
              <Image
                src={'/icons/link.svg'}
                alt={'link'}
                width={41}
                height={41}
              />
            </Link>
            <Link href='#!' className={styles['link']}>
              <Image
                src={'/icons/link.svg'}
                alt={'link'}
                width={41}
                height={41}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
