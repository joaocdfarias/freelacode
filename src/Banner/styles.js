import styled from "styled-components";
import background from "../images/background.png";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.div`
  width: 75%;

  h1 {
    font-size: ${(props) => props.theme.size.fontSizeBig};
    margin-block-start: 0;
    margin-block-end: 0;
    line-height: 2.5rem;
  }

  p {
    font-size: ${(props) => props.theme.size.fontSize};
  }
`;

export const Image = styled.div`
  background: url(${background});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 500px;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const Button = styled.button`
  background: ${(props) =>
    props.primary ? props.theme.colors.primary : props.theme.colors.secondary};
  color: ${(props) =>
    props.primary
      ? props.theme.colors.textColor
      : props.theme.colors.secondaryTextColor};
  font-weight: bold;
  padding: 15px 25px;
  border-radius: 10px;
  border: none;
  font-size: ${(props) => props.theme.size.fontSize};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
