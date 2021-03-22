import styled from "styled-components";

export const NewsletterFooter = styled.div`
  margin-top: 60px;
  padding: 30px;
  background: ${(props) => props.theme.colors.secondary};
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.size.fontSizeLarge};
  color: ${(props) => props.theme.colors.secondaryTextColor};
  margin-block-start: 0;
  margin-block-end: 0;
  text-align: center;
`;

export const InputWrapper = styled.div`
  padding: 20px;
  text-align: center;

  input {
    padding: 15px;
    font-size: ${(props) => props.theme.size.fontSizeMedium};
    border: none;
    border-radius: 10px 0 0 10px;
  }

  button {
    padding: 15px;
    font-size: ${(props) => props.theme.size.fontSizeMedium};
    border: none;
    border-radius: 0 10px 10px 0;
    color: ${(props) => props.theme.colors.textColor};
    background: ${(props) => props.theme.colors.primary};
  }
`;

export const MainFooter = styled.div`
  background: ${(props) => props.theme.colors.primary};
  padding: 20px 6%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 250px;
`;

export const Logo = styled.h1``;
export const NavWrapper = styled.div`
  color: ${(props) => props.theme.colors.secondaryTextColor};
  display: flex;
`;
export const Map = styled.ul`
  list-style: none;

  li {
    padding: 5px 15px;
  }
`;
export const SocialMedia = styled.ul`
  list-style: none;

  li {
    padding: 5px 15px;
  }
`;

export const CopyrightFooter = styled.div`
  background: #257eb8;
  text-align: center;
  padding: 10px;
  color: ${(props) => props.theme.colors.secondaryTextColor};
`;
