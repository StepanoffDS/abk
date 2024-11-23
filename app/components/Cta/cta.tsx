'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './cta.module.scss';

export const Cta = () => {
  const textareaRef = useRef(null);
  const [text, setText] = useState('');

  useEffect(() => {
    if (textareaRef.current) {
      const elem = textareaRef.current as HTMLTextAreaElement;
      elem.style.height = 'auto'; //
      elem.style.height = `${elem.scrollHeight + 5}px`;
    }
  }, [text]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <section className={`${styles['cta']} section`}>
      <div className='container'>
        <div className={styles['inner']}>
          <div className={styles['col-1']}>
            <h2 className={`${styles['title']}`}>
              <span className={styles['title-top']}>Хочешь</span>{' '}
              <span className={styles['title-bottom']}>в команду?</span>
            </h2>
          </div>
          <div className={styles['col-2']}>
            <form className={styles['form']}>
              <div className={styles['form-field']}>
                <input type='text' placeholder='Имя' />
              </div>
              <div className={styles['form-field']}>
                <input type='text' placeholder='Специализация' />
              </div>
              <div className={styles['form-field']}>
                <input type='text' placeholder='Номер телефона' />
              </div>
              <div className={styles['form-field']}>
                <textarea
                  placeholder='О себе'
                  ref={textareaRef}
                  value={text}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button className={styles['form-action']} type='submit'>
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
