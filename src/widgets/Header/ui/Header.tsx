import clsx from 'clsx';
import styles from './Header.module.scss';
import { CountIcon } from '@/shared';
import CartIcon from '@/shared/assets/icons/cart.svg?react'
import HeartIcon from '@/shared/assets/icons/heart.svg?react'
import { ROUTES } from '@/shared';
import { useNavigate } from 'react-router-dom';
import { Logo } from '@/shared';
import { useSelector } from 'react-redux';
import { selectCartTotalCount } from '@/entities/Cart';
interface HeaderProps {
  /*Доп классы*/
  className?: string;

}

export const Header = ({ className }: HeaderProps) => {
  const navigate = useNavigate()
  const cartCount = useSelector(selectCartTotalCount)
  return (
    <header className={clsx(className, styles.header)}>
      <Logo />
      <nav className={styles.icon}>
        <CountIcon icon={<HeartIcon />} count={2} />
        <CountIcon icon={<CartIcon />} count={Number(cartCount)} onClick={() => navigate(ROUTES.CART)} />
      </nav>
    </header>
  );
};