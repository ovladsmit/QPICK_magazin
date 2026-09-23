import clsx from 'clsx';
import styles from './ProductInfo.module.scss';
import type { Product } from '../model/types/product';
import Star from '@/shared/assets/icons/star.svg?react';
import { Button, ThemeButton } from '@/shared';
import { useTranslation } from 'react-i18next';

interface ProductInfoProps {
  className?: string;
  product: Product;
  onBuyClick?: () => void;
}

export const ProductInfo = ({ className, product, onBuyClick }: ProductInfoProps) => {
  const { img, title, price, oldPrice, rate, description } = product;
  const { t } = useTranslation();

  return (
    <div className={clsx(className, styles.productInfo)}>
      <img className={styles.image} src={img} alt={title} />

      <div className={styles.body}>
        <span className={styles.title}>{title}</span>
        <p>{description}</p>
        <div className={styles.bottom}>
          <div className={styles.info}>
            <div className={styles.rating}>
              <Star className={styles.star} />
              <span>{rate}</span>
            </div>
            <div className={styles.prices}>
              <span className={styles.priceNew}>{price} ₽</span>
              {oldPrice && <span className={styles.priceOld}>{oldPrice} ₽</span>}
            </div>
          </div>

          <div className={styles.button}>
            <Button theme={ThemeButton.CLEAR} onClick={onBuyClick}>{t('Добавить в избранное')}</Button>
            <Button theme={ThemeButton.BLACK} onClick={onBuyClick}>{t('Добавить в корзину')}</Button>
          </div>
        </div>

      </div>
    </div>
  );
};