import styled from "styled-components";

export const DataCardWrapper = styled.div`
  margin-top: 60px;
`;
export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 30px;
`;
export const Card = styled.div`
  width: 300px;
  height: 300px;
  padding: 20px;
  text-align: center;
  border: 1px solid #cccccc;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.backgroundCard};
`;
export const CardNumber = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-size: 64px;
  margin-top: 55px;
  margin-block-end: 0;
`;
export const CardTitle = styled.h3`
  color: ${(props) => props.theme.colors.secondaryTextColor};
  font-size: ${(props) => props.theme.size.fontSizeMedium};
  margin-block-start: 0;
  margin-block-end: 0;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.size.fontSizeLarge};
  color: ${(props) => props.theme.colors.secondaryTextColor};
  margin-block-start: 0;
  margin-block-end: 0;

  strong {
    color: ${(props) => props.theme.colors.primary};
  }
`;
