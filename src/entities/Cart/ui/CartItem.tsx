import clsx from 'clsx';
import styles from './CartItem.module.scss';
import TrashIcon from '@/shared/assets/icons/trash.svg?react';
import Plus from '@/shared/assets/icons/plus.svg?react';
import Min from '@/shared/assets/icons/min.svg?react';
import type { CartItem as CartItemType } from '../model/types/cart';

interface CartItemProps {
  /*Доп классы*/
  className?: string;
  /**Товары корзины*/
  item: CartItemType;
  /**Обработчик удаления из корзины*/
  onRemove?: () => void;
  /**Обработчик увеличения числа товаров*/
  onIncrement?: () => void;
  /**Обработчик уменьшения числа товаров*/
  onDecrement?: () => void;
}

export const CartItem = ({ className, onRemove, onDecrement, onIncrement, item }: CartItemProps) => {

  const { product, count } = item;

  return (

    <li className={clsx(className, styles.cartItem)}>
      <button className={styles.trash} onClick={onRemove}><TrashIcon /></button>

      <div className={styles.top}>
        <img className={styles.image} src={product.img} alt={product.title} />
        <div className={styles.info}>
          <span className={styles.title}>{product.title}</span>
          <span className={styles.price}>{product.price} ₽</span>
        </div>
      </div>


      <div className={styles.bottom}>
        <div className={styles.counter}>
          <button type="button" className={styles.counterButton} onClick={onDecrement}>
            <Min />
          </button>
          <span className={styles.count}>{count}</span>
          <button type="button" className={styles.counterButton} onClick={onIncrement}>
            <Plus />
          </button>
        </div>

        <span className={styles.total}>{product.price * count} ₽</span>
      </div>

    </li>
  );
};