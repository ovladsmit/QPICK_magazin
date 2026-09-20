import clsx from 'clsx';
import styles from './Button.module.scss';
import type { ButtonHTMLAttributes } from 'react';
import { ThemeButton } from './Button.types';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  /*Доп классы*/
  className?: string;
  /**Тема кнопки*/
  theme?: ThemeButton
  
}

export const Button = ({ className, children, theme = ThemeButton.CLEAR, ...otherProps }: ButtonProps) => {
  return (
    <button className={clsx(className, styles.button, styles[theme])} {...otherProps}>
      {children}
    </button>
  );
};