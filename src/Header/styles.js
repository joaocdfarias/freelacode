import styled from "styled-components";

export const NavHeader = styled.div`
  display: flex;
  padding: 20px 0;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1``;

export const Nav = styled.ul`
  list-style: none;
  display: flex;
  gap: 25px;
  font-size: ${(props) => props.theme.size.fontSize};
`;
