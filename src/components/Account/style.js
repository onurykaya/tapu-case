import styled, { css } from 'styled-components';

export const Input = styled.input`
  height: 42px;
  outline: none;
  border-width: 0 0 2px;
  border-bottom-color: ${(props) => props.theme.color.color6};
  padding: 0 10px;
  transition: all 200ms ease-in-out;
  margin-bottom: 50px;

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.theme.color.gray};
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid ${(props) => props.theme.color.color5};
  }
`;

export const Select = styled.select`
  height: 42px;
  outline: none;
  border-width: 0 0 2px;
  border-bottom-color: ${(props) => props.theme.color.color6};
  padding: 0 10px;
  transition: all 200ms ease-in-out;
  margin-bottom: 50px;

  &:focus {
    outline: none;
    border-bottom: 2px solid ${(props) => props.theme.color.color5};
  }
`;

export const Option = styled.option`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 25px 25px 95px 25px;
`;

export const Title = styled.div`
  color: ${(props) => props.theme.color.color2};
  font-weight: 600;
  font-size: 32px;
  line-height: 42px;
  margin-top: 50px;
  padding: 25px;
`;

export const SubmitButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.color.color6};
  color: ${(props) => props.theme.color.color4};
  pointer-events: none;

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${(props) => props.theme.color.red};
      cursor: pointer;
      pointer-events: auto;
    `};
}
`;
