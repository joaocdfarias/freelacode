import styled from "styled-components";

export const BannerWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const BannerItem = styled.div`
  padding: 20px;
  width: 300px;
  text-align: center;
  height: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  svg {
    width: 80px;
    height: 80px;
    color: ${(props) => props.theme.colors.primary};
  }

  h2 {
    margin-block-start: 0;
    margin-block-end: 0;
    font-size: ${(props) => props.theme.size.fontSizeMedium};
    color: ${(props) => props.theme.colors.secondaryTitle};
  }

  p {
    margin-block-start: 0;
    margin-block-end: 0;
    font-size: ${(props) => props.theme.size.fontSize};
    color: ${(props) => props.theme.colors.secondaryTextColor};
  }
`;
