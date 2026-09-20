import clsx from 'clsx';
import styles from './Footer.module.scss';
import { Logo } from '@/shared';
import { LangSwitcher } from '@/features/LangSwitcher';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import VkIcon from '@/shared/assets/icons/vk.svg?react';
import TelegramIcon from '@/shared/assets/icons/telegram.svg?react';
import WhatsappIcon from '@/shared/assets/icons/whatsapp.svg?react';
interface FooterProps {
  /*Доп классы*/
  className?: string;

}

export const Footer = ({ className }: FooterProps) => {
  const { t } = useTranslation()
  return (
    <footer className={clsx(className, styles.footer)}>
      <Logo className={styles.logo} />
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <li><Link className={styles.link} to=''>{t('Избранное')}</Link></li>
          <li><Link className={styles.link} to=''>{t('Корзина')}</Link></li>
          <li><Link className={styles.link} to=''>{t('Контакты')}</Link></li>
        </ul>
        <div className={styles.secondary}>
          <Link className={styles.link} to=''>{t('Условия сервиса')}</Link>
          <LangSwitcher />
        </div>

      </nav>
      <div className={styles.social}>
        <a target='_blank' href="https://vk.ru/ovladsmit"><VkIcon /></a>
        <a target='_blank' href="https://t.me/ovladsmit"><TelegramIcon /></a>
        <a href=""><WhatsappIcon /></a>
      </div>

    </footer>
  );
};