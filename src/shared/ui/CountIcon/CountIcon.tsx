import clsx from 'clsx';
import styles from './CountIcon.module.scss';

interface CountIconProps {
  /*Доп классы*/
  className?: string;
  /**SVG иконка*/
  icon: React.ReactNode
  /**Обработчик клика*/
  onClick?: () => void
  /**Счетчик*/
  count?: number
}

export const CountIcon = ({ className, icon, onClick, count }: CountIconProps) => {
  return (
    <button onClick={onClick} className={clsx(className, styles.countIcon)}>
      {icon}
      {count !== undefined && count > 0 && (
        <span className={styles.count}>{count}</span>
      )}
    </button>
  );
};