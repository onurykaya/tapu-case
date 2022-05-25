import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: flex-start;
  border-bottom: 1px solid ${(props) => props.theme.color.color3};
  display: flex;
  justify-content: flex-start;
  padding: 25px;

  :last-child {
    margin-bottom: 90px;
  }

  :first-child {
    margin-top: 45px;
  }
`;

export const Container = styled.div`
  padding-bottom: 300px;
`;

export const ImageWrapper = styled.div`
  border-radius: 12px;
  height: 75px;
  text-align: center;
  width: 72px;
`;

export const Image = styled.img`
  border-radius: 12px;
  height: 75px;
  width: 72px;
`;

export const ContentWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
`;

export const Title = styled.div`
  color: ${(props) => props.theme.color.color2};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 4px;
`;

export const Explain = styled.div`
  color: ${(props) => props.theme.color.gray};
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
`;

export const RateWrapper = styled.span`
  margin-right: 20px;
`;

export const Content = styled.div`
  align-items: center;
  color: ${(props) => props.theme.color.color2};
  display: flex;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  margin-top: 13px;
`;

export const LocationWrapper = styled.span`
  align-items: center;
  display: flex;
`;

export const AddWrapper = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  margin-top: 32px;
`;

export const AddText = styled.span`
  color: ${(props) => props.theme.color.red};
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.9px;
  margin-left: 12px;
`;

export const Value = styled.span`
  margin-left: 5px;
`;
