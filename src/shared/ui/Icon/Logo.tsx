import { ROUTES } from '@/shared/config/routes';
import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
interface IconProps {
  /*Доп классы*/
  className?: string;
  
}

export const Logo = ({ className }: IconProps) => {
  return (
    <Link to={ROUTES.MAIN} className={clsx(className, styles.icon)}>
      <h1>QPICK</h1>
    </Link>
  );
};