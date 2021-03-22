import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 90px;
`;
export const Card = styled.div`
  margin-top: 30px;
  width: 320px;
  background: ${(props) => props.theme.colors.backgroundCard};
  text-align: center;
  border: 1px solid #cccccc;
  border-radius: 10px;
`;
export const Image = styled.img`
  border-radius: 10px 10px 0 0;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;

  h3 {
    margin-block-start: 0;
    margin-block-end: 0;
    font-size: ${(props) => props.theme.size.fontSizeMedium};
  }

  p {
    margin-block-start: 0;
    margin-block-end: 0;
    font-size: ${(props) => props.theme.size.fontSize};
  }
`;
export const Star = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: ${(props) => props.theme.size.fontSize};

  svg {
    color: ${(props) => props.theme.colors.starColor};
    width: 30px;
    height: 30px;
  }
`;
export const About = styled.p`
  padding: 0 20px;
  font-size: ${(props) => props.theme.size.fontSize};
  margin-block-start: 0;
  margin-block-end: 0;
`;

export const Button = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textColor};
  font-size: ${(props) => props.theme.size.fontSize};
  padding: 10px 20px;
  margin: 20px 0;
  border-radius: 10px;
  border: none;
`;
