import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`;
export const FullName = styled.div`
  color: ${(props) => props.theme.color.color2};
  font-weight: 600;
  font-size: 32px;
  line-height: 42px;
  margin-bottom: 25px;
`;

export const Text = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 29px;
  margin-bottom: 20px;
`;
