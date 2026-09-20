import clsx from 'clsx';
import styles from './ProductList.module.scss';
import type { Product } from '@/entities/Product/model/types/product';
import { ProductCard } from '@/entities/Product';
import { useDispatch } from 'react-redux';
import { addItem } from '@/entities/Cart';
interface ProductListProps {
  /*Доп классы*/
  className?: string;
  /**Товары*/
  items: Product[]
  /**Название категории*/
  nameList?: string

}

export const ProductList = ({ className, items, nameList }: ProductListProps) => {
  const dispatch = useDispatch()
  const handleBuyClick = (product: Product) => {
    dispatch(addItem(product))
  }


  return (
    <section className={styles.productList}>
      <h2 className={styles.nameList}>{nameList}</h2>
      <ul className={clsx(className, styles.list)}>
        {items.map((product) => (
          <ProductCard product={product} key={product.id} onBuyClick={() => handleBuyClick(product)} />
        ))}
      </ul>
    </section>
  );
};