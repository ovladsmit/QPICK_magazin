import { headphones, wirelessHeadphones } from '@/entities/Product';
import { ProductList } from '@/widgets/ProductList';
import styles from './CatalogPage.module.scss';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
interface CatalogPageProps {
  /*Доп классы*/
  className?: string;

}

export const CatalogPage = ({ className }: CatalogPageProps) => {
  const {t} = useTranslation()
  return (
    <div className={clsx(className, styles.catalog)}>
      <ProductList items={headphones} nameList={t("Наушники")} />
      <ProductList items={wirelessHeadphones} nameList={t("Беспроводные наушники")} />
    </div>
  );
};