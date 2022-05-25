import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { Container, FullName, Text } from './style';
import { Option, Select } from '../Account/style';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const UserInfo = ({ handleInputChange }) => {
  const { user } = useContext(UserContext);
  const { t } = useTranslation('');

  return (
    <Container>
      <FullName>{user?.fullName}</FullName>
      <Text>
        {t('account.email')}: {user?.email}
      </Text>
      <Text>
        {t('account.password')}: {user?.password}
      </Text>
      <Text>Current Locale: {user?.locale}</Text>
      <Select
        onChange={(event) => {
          handleInputChange(event);
          i18next.changeLanguage(event.target.value);
        }}
        name="locale"
      >
        <Option value="tr">{t('language.turkish')}</Option>
        <Option value="en">{t('language.english')}</Option>
      </Select>
    </Container>
  );
};

export default UserInfo;
