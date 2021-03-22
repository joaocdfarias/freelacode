import React from "react";
import {
  NewsletterFooter,
  Title,
  InputWrapper,
  MainFooter,
  Logo,
  NavWrapper,
  Map,
  SocialMedia,
  CopyrightFooter,
} from "./styles";

function Footer() {
  return (
    <>
      <NewsletterFooter>
        <Title>Assine nossa newsletter</Title>
        <InputWrapper>
          <input type="text" placeholder="Insira aqui seu email" />
          <button>Assinar</button>
        </InputWrapper>
      </NewsletterFooter>
      <MainFooter>
        <Logo>🖌 FreelaCode</Logo>
        <NavWrapper>
          <Map>
            <h2>Mapa do site</h2>
            <li>Home</li>
            <li>Contato</li>
            <li>Sobre</li>
          </Map>
          <SocialMedia>
            <h2>Redes Sociais</h2>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </SocialMedia>
        </NavWrapper>
      </MainFooter>
      <CopyrightFooter>
        <h2>2021 © FreelaCode - Todos os direitos reservados.</h2>
      </CopyrightFooter>
    </>
  );
}

export default Footer;
