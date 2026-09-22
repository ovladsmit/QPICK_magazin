import type { InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';
import clsx from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /*Доп классы*/
  className?: string;
  /**Текст ошибки*/
  error?: string

}

export const Input = ({ className, error, ...otherProps }: InputProps) => {
  return (
    <div className={clsx(className, styles.inputWrapper)}>
      <input className={clsx(styles.input, {[styles.inputError]: error})} {...otherProps} />
      {error && (
        <span className={styles.error}>{error}</span>
      )}
    </div>


  );
};