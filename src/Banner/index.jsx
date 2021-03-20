import React from "react";
import { Wrapper, Image, Text, Button, ButtonWrapper } from "./styles";
import light from "../Themes/light";

function Banner() {
  return (
    <Wrapper>
      <Text>
        <h1>
          Encontre os melhores desenvolvedores{" "}
          <strong style={{ color: light.colors.primary }}>freelancers</strong>.
        </h1>
        <p>
          Nossa missão é conectar você aos melhores desenvolvedores para o seu
          projeto. Nós te conectamos de web designers até full-stack developers.
        </p>
        <ButtonWrapper>
          <Button primary>Criar conta</Button>
          <Button>Saiba mais</Button>
        </ButtonWrapper>
      </Text>
      <Image />
    </Wrapper>
  );
}

export default Banner;
