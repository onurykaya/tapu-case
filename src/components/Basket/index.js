import { ContentText, Title, Total, Wrapper } from './style';
import { useTranslation } from 'react-i18next';

const Basket = ({ basket }) => {
  const total = basket?.reduce((acc, item) => acc + Number(item?.price), 0);
  const delivery = 12;
  const tax = total * 0.18;
  const taxesShipping = (tax + delivery).toFixed(2);
  const grandTotal = (tax + total + delivery).toFixed(2);

  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title>{t('basket.totalProduct')}</Title>
      <ContentText>
        {t('basket.total')}: {total} TL
      </ContentText>
      <ContentText>
        {t('basket.taxesShipping')}: {taxesShipping} TL
      </ContentText>
      <Total>
        {t('basket.grandTotal')}: {grandTotal} TL
      </Total>
    </Wrapper>
  );
};

export default Basket;
