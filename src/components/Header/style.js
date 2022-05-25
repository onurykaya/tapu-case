import styled from 'styled-components';

export const Wrapper = styled.nav`
  align-items: center;
  background-color: ${(props) => props.theme.color.color1};
  bottom: 0;
  display: flex;
  height: 88px;
  justify-content: space-evenly;
  left: 0;
  position: fixed;
  right: 0;
  width: 100%;
`;
export const ItemWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Text = styled.div`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 14px;
  margin-top: 10px;
`;
