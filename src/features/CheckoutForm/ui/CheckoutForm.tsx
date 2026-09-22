import { useDispatch, useSelector } from 'react-redux';
import styles from './CheckoutForm.module.scss';
import { selectFormState } from '../model/selectors/checkoutSelectors';
import { Input, ThemeButton } from '@/shared';
import clsx from 'clsx';
import type { ChangeEvent } from 'react';
import { setField } from '../model/slice/checkoutSlice';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared';
import { useState } from 'react';
import { submitOrder } from '../model/slice/checkoutSlice';
import type { SubmitEvent } from 'react';
interface CheckoutFormProps {
  /*Доп классы*/
  className?: string;

}
const PHONE_PATTERN = /^\+?[0-9\s\-()]{10,}$/;

export const CheckoutForm = ({ className }: CheckoutFormProps) => {
  const { name, phone, address, status } = useSelector(selectFormState)
  const [phoneError, setPhoneError] = useState<string | undefined>(undefined);
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const handleChange = (field: 'name' | 'phone' | 'address') => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(setField({ field, value: e.target.value }))
      if (field === 'phone') {
        setPhoneError(undefined);
      }
    }
  }

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!PHONE_PATTERN.test(phone)) {
      setPhoneError(t('Введите корректный номер телефона'));
      return;
    }

    dispatch(submitOrder());
  };

  if (status === 'success') {
    return (
      <div className={styles.success}>
        <p className={styles.successText}>{t('Заказ оформлен!')}</p>
        <p className={styles.successSubtext}>{t('Мы свяжемся с вами в ближайшее время')}</p>
      </div>
    );
  }

  return (
    <form className={clsx(className, styles.form)} onSubmit={handleSubmit}>
      <h2 className={styles.title}>{t("Оформление заказа")}</h2>
      <Input required placeholder={t('Имя')} value={name} onChange={handleChange('name')} />
      <Input error={phoneError} type='tel' required value={phone} placeholder={t('Телефон')} onChange={handleChange('phone')} />
      <Input required value={address} placeholder={t('Адрес доставки')} onChange={handleChange('address')} />
      <Button type='submit' className={styles.submit} theme={ThemeButton.BLACK}>
        {t('Подтвердить заказ')}
      </Button>
    </form>
  );
};