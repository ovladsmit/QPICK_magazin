
import styles from './CartList.module.scss';
import type { CartItemType } from '@/entities/Cart';
import { CartItem, decrementCount, incrementCount, removeItem, selectCartTotalPrice } from '@/entities/Cart';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ThemeButton } from '@/shared';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared';
import { Modal } from '@/shared';
import { CheckoutForm } from '@/features/CheckoutForm';

import { useState } from 'react';
interface CartListProps {
  /*Доп классы*/
  className?: string;
  /**Элементы корзины*/
  item: CartItemType[]

}

export const CartList = ({ className, item }: CartListProps) => {
  const {t} = useTranslation()
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const removeButtonClick = (item: CartItemType) => {
    dispatch(removeItem(item.product.id))
  }

  const incrementButtonClick = (item: CartItemType) => {
    dispatch(incrementCount(item.product.id))
  }
  const decrementButtonClick = (item: CartItemType) => {
    dispatch(decrementCount(item.product.id))
  }

  const handleButton = () => {
    setIsOpen(true)
  }
  const totalPrice = useSelector(selectCartTotalPrice)

  if (item.length === 0) {
    return (
      <div className={styles.empty}>
        <h2 className={styles.emptyText}>{t("Корзина пуста")}</h2>
        <Link className={styles.emptyLink} to={ROUTES.MAIN}>
          {t("Перейти в каталог")}
        </Link>
      </div>
    );
  }


  return (
    <section className={styles.cart}>
      <ul className={clsx(className, styles.cartList)}>
        {item.map((item) => <CartItem key={item.product.id} onDecrement={() => decrementButtonClick(item)} onIncrement={() => incrementButtonClick(item)} onRemove={() => removeButtonClick(item)} item={item} />)}
      </ul>
      <div className={styles.totalStatus}>
          <div className={styles.price}>
            <span>{t("Итого")}</span>
            <span>{totalPrice} ₽</span>
          </div>
          <Button onClick={handleButton} theme={ThemeButton.BLACK}>{t("Перейти к оформлению")}</Button>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <CheckoutForm/>
      </Modal>
    </section>


  );
};