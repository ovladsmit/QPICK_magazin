import clsx from 'clsx';
import type { Product } from '../model/types/product';
import styles from './ProductCard.module.scss';
import Star from "@/shared/assets/icons/star.svg?react"
import { Button } from '@/shared';
import { useTranslation } from 'react-i18next';
interface ProductCardProps {
  /*Доп классы*/
  className?: string;
  /**Товары*/
  product: Product
  /**Обработчик клика по кнопке*/
  onBuyClick?: () => void;

}

export const ProductCard = ({ className, product, onBuyClick }: ProductCardProps) => {
  const { img, title, price, oldPrice, rate } = product
  const {t} = useTranslation()
  return (
    <li className={clsx(styles.card, className)}>
      <img className={styles.image} src={img} alt={title} />
      <div className={styles.footer}>
        <div className={styles.topRow}>
          <span className={styles.title}>{title}</span>
          <div className={styles.prices}>
            <span className={styles.priceNew}>{price} ₽</span>
            {oldPrice && <span className={styles.priceOld}>{oldPrice} ₽</span>}
          </div>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.rating}>
            <Star className={styles.star}/>
            <span>{rate}</span>
          </div>
          <Button onClick={onBuyClick}>{t("Купить")}</Button>
        </div>
      </div>
    </li>
  );
};