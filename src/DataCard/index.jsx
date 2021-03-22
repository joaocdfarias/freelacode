import React from "react";
import {
  Title,
  DataCardWrapper,
  CardWrapper,
  Card,
  CardNumber,
  CardTitle,
} from "./styles";

function DataCard() {
  return (
    <DataCardWrapper>
      <Title>
        Dados sobre o <strong>FreelaCode</strong>
      </Title>
      <CardWrapper>
        <Card>
          <CardNumber>365</CardNumber>
          <CardTitle>Projetos concluídos</CardTitle>
        </Card>

        <Card>
          <CardNumber>3256</CardNumber>
          <CardTitle>Projetos em andamento</CardTitle>
        </Card>

        <Card>
          <CardNumber>212</CardNumber>
          <CardTitle>Clientes satisfeitos</CardTitle>
        </Card>
      </CardWrapper>
    </DataCardWrapper>
  );
}

export default DataCard;
