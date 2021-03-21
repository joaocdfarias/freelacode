import React from "react";
import { BannerWrapper, BannerItem } from "./styles";
import LockIcon from "@material-ui/icons/Lock";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import StarIcon from "@material-ui/icons/Star";

function About() {
  return (
    <BannerWrapper>
      <BannerItem>
        <LockIcon />
        <h2>Segurança</h2>
        <p>Somente você tem acesso aos seus contratos.</p>
      </BannerItem>

      <BannerItem>
        <LiveHelpIcon />
        <h2>Suporte 24/7</h2>
        <p>Nosso suporte está disponível o tempo todo para te ajudar.</p>
      </BannerItem>

      <BannerItem>
        <StarIcon />
        <h2>Qualidade</h2>
        <p>No FreelaCode você tem certeza que seu produto será de qualidade.</p>
      </BannerItem>
    </BannerWrapper>
  );
}

export default About;
