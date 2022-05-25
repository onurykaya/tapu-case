import {
  FormContainer,
  Input,
  Option,
  Select,
  SubmitButton,
  Title
} from './style';
import { UserContext } from '../../context/UserContext';
import { useContext, useEffect, useState } from 'react';
import UserInfo from '../UserInfo';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const Account = () => {
  const { user, setUser } = useContext(UserContext);
  const [isSubmit, setIsSubmit] = useState(false);
  const { t } = useTranslation('');

  const isActiveButton =
    user?.email?.length > 0 &&
    user?.fullName?.length > 0 &&
    user?.password?.length > 0;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    localStorage.setItem('lang', user.locale);
    i18next.changeLanguage(localStorage.getItem('lang'));
    console.log(localStorage.getItem('lang'));
    console.log('çalıştı');
  }, [user.locale]);

  return (
    <>
      <Title>{t('account.title')}</Title>
      {!isSubmit && (
        <FormContainer autoComplate="off">
          <Input
            defaultValue={user.fullName}
            name="fullName"
            onChange={handleInputChange}
            placeholder={t('account.fullName')}
          />
          <Input
            name="email"
            defaultValue={user.email}
            onChange={handleInputChange}
            placeholder={t('account.email')}
          />
          <Input
            name="password"
            defaultValue={user.password}
            onChange={handleInputChange}
            placeholder={t('account.password')}
          />
          <Select
            onChange={(event) => {
              handleInputChange(event);
            }}
            name="locale"
            defaultValue={user.locale}
          >
            <Option value="tr">{t('language.turkish')}</Option>
            <Option value="en">{t('language.english')}</Option>
          </Select>
          <SubmitButton
            onClick={() => setIsSubmit(true)}
            isActive={isActiveButton}
          >
            {t('account.signIn')}
          </SubmitButton>
        </FormContainer>
      )}
      {isSubmit && <UserInfo handleInputChange={handleInputChange} />}
    </>
  );
};

export default Account;
