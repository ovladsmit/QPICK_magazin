import clsx from 'clsx';
import styles from './CartPage.module.scss';
import { CartList } from '@/widgets/CartList';
import { useSelector } from 'react-redux';
import { selectCartItems } from '@/entities/Cart';
import { useTranslation } from 'react-i18next';
interface CartPageProps {
  /*Доп классы*/
  className?: string;

}

export const CartPage = ({ className }: CartPageProps) => {
  const cartItems = useSelector(selectCartItems)
  const {t} = useTranslation()
  return (
    <div className={clsx(className, styles.cartPage)}>
      <h2 className={styles.title}>{t("Корзина")}</h2>
      <CartList item={cartItems}/>
    </div>
  );
};