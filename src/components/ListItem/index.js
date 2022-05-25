import { useEffect, useState } from 'react';
import axios from 'axios';

import Basket from '../Basket';

import {
  AddText,
  AddWrapper,
  Content,
  ContentWrapper,
  Explain,
  Image,
  ImageWrapper,
  LocationWrapper,
  RateWrapper,
  Title,
  Value,
  Wrapper
} from './style';

import RateStar from '../icons/RateStar';
import Location from '../icons/Location';
import AddBasket from '../icons/AddBasket';
import { useTranslation } from 'react-i18next';
import MyLoader from '../Loading';

const ListItem = () => {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);
  const [loadCount, setLoadCount] = useState(10);
  const [isLoading, setIsLoading] = useState(true);

  const { t } = useTranslation();

  const addBasket = (id, basketObj) => {
    const checkBasket = basket?.find((item) => Number(item?.id) === id);

    if (checkBasket) {
      setBasket(basket?.filter((item) => Number(item?.id) !== id));
    } else {
      setBasket([...basket, { ...basketObj }]);
    }
  };

  const handleScroll = () => {
    const isBottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    if (loadCount <= data?.length && isBottom) {
      setLoadCount(loadCount + 10);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    axios
      .get('https://628d1f82a3fd714fd03f9c28.mockapi.io/real-estate')
      .then((response) => {
        if (response?.status === 200) {
          setData(response?.data);
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && <MyLoader />}
      {!isLoading &&
        data?.map((item, index) => {
          if (index < loadCount) {
            return (
              <Wrapper key={item?.id}>
                <ImageWrapper>
                  <Image loading="lazy" src={item?.imgUrl} alt={item?.title} />
                </ImageWrapper>
                <ContentWrapper>
                  <Title>{item?.title}</Title>
                  <Explain>{item?.explain}</Explain>
                  <Content>
                    <RateWrapper>
                      <RateStar /> <Value>{item?.rate}</Value>
                    </RateWrapper>
                    <LocationWrapper>
                      <Location /> <Value>{item?.distance} km</Value>
                    </LocationWrapper>
                  </Content>
                  <AddWrapper onClick={() => addBasket(Number(item?.id), item)}>
                    <AddBasket /> <AddText>{t('listItem.addBasket')}</AddText>
                  </AddWrapper>
                </ContentWrapper>
              </Wrapper>
            );
          }
        })}
      {!isLoading && <Basket basket={basket} />}
    </>
  );
};

export default ListItem;
