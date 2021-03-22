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
