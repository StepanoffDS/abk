import React from 'react';
import styles from './logo.module.scss';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link className={styles['logo']} href={'/'}>
      АВК
    </Link>
  );
};
