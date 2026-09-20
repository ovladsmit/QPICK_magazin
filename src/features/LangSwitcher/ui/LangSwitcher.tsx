import clsx from 'clsx';
import styles from './LangSwitcher.module.scss';
import LangIcon from '@/shared/assets/icons/lang.svg?react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared';
import i18n from '@/shared/config/i18n/i18n';
interface LangSwitcherProps {
  /*Доп классы*/
  className?: string;

}

const handleChange = (lang: 'ru' | 'en') => {
  i18n.changeLanguage(lang)
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { i18n } = useTranslation();
  return (
    <div className={clsx(className, styles.switcher)}>
      <LangIcon />
      <Button className={clsx(i18n.language === 'ru' && styles.active)} onClick={() => handleChange('ru')}>Рус</Button>
      <Button className={clsx(i18n.language === 'en' && styles.active)} onClick={() => handleChange('en')}>Eng</Button>
    </div>
  );
};