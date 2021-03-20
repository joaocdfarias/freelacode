import React from "react";
import light from "../Themes/light";
import { NavHeader, Logo, Nav } from "./styles";

function Header() {
  return (
    <>
      <NavHeader>
        <Logo>
          🖌 Freela<strong style={{ color: light.colors.primary }}>Code</strong>
        </Logo>
        <Nav>
          <li>Home</li>
          <li>Contato</li>
          <li>Sobre</li>
          <li>Login</li>
          <li style={{ color: light.colors.primary, fontWeight: "bold" }}>
            Cadastre-se
          </li>
        </Nav>
      </NavHeader>
    </>
  );
}

export default Header;
