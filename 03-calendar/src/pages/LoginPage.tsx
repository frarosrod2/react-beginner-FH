import { useTranslation } from 'react-i18next';

export const LoginPage = () => {
  const { t } = useTranslation();

  return <div>{t('LoginPage.LoginPage')}</div>;
};
