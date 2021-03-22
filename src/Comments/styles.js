import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${(props) => props.theme.size.fontSizeLarge};
  color: ${(props) => props.theme.colors.secondaryTextColor};
  margin-block-start: 0;
  margin-block-end: 0;
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.size.fontSizeMedium};
  color: ${(props) => props.theme.colors.secondaryTextColor};
  margin-block-start: 0;
  margin-block-end: 0;
`;

export const CommentsWrapper = styled.div`
  margin-top: 100px;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-top: 30px;
`;
export const Card = styled.div`
  background: ${(props) => props.theme.colors.backgroundCard};
  border: 1px solid #cccccc;
  border-radius: 10px;
  padding: 20px;
  width: 500px;
`;
export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  /* border: 1px solid ${(props) => props.theme.colors.primary}; */
`;
export const CardTitle = styled.div`
  h2 {
    margin-block-start: 0;
    margin-block-end: 0;
    font-size: ${(props) => props.theme.size.fontSizeMedium};
  }

  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }
`;
export const CardText = styled.p`
  font-size: ${(props) => props.theme.size.fontSize};
  margin-block-start: 1em;
  margin-block-end: 0;
  color: ${(props) => props.theme.colors.secondaryTextColor};
`;

export const CardHeader = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
