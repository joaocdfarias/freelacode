import React, { useContext } from "react";
import light from "../Themes/light";
import { ModalContext } from "../Contexts/ModalContext";

import { NavHeader, Logo, Nav } from "./styles";

function Header() {
  const { handleClick } = useContext(ModalContext);

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
          <li
            style={{
              color: light.colors.primary,
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={handleClick}
          >
            Cadastre-se
          </li>
        </Nav>
      </NavHeader>
    </>
  );
}

export default Header;
