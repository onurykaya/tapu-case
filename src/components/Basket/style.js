import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: flex-start;
  background-color: ${(props) => props.theme.color.color4};
  border-top: 1px solid ${(props) => props.theme.color.color3};
  bottom: 88px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  left: 0;
  margin-top: 32px;
  padding: 35px;
  position: fixed;
  right: 0;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
`;

export const Total = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 33px;
`;

export const ContentText = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 206.34%;
`;
