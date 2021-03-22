import React from "react";
import Cards from "./Cards";
import { Title, Text } from "./styles";

function Devs() {
  return (
    <div>
      <Title> Desenvolvedores em destaque </Title>
      <Text>Conheça os devs mais requisitados do FreelaCode</Text>
      <Cards />
    </div>
  );
}

export default Devs;
