import React from "react";
import {
  Title,
  Text,
  CommentsWrapper,
  CardWrapper,
  Card,
  Avatar,
  CardTitle,
  CardText,
  CardHeader,
} from "./styles";

import avatar1 from "../images/avatar1.svg";
import avatar2 from "../images/avatar2.svg";

function Comments() {
  return (
    <CommentsWrapper>
      <Title>Comentários de clientes</Title>
      <Text>
        Veja o que os contratantes do FreelaCode estão dizendo sobres os devs da
        nossa plataforma.
      </Text>
      <CardWrapper>
        <Card>
          <CardHeader>
            <Avatar src={avatar1} />
            <CardTitle>
              <h2>Rosângela Soares</h2>
              <p>CEO da Gabiru Bebidas</p>
            </CardTitle>
          </CardHeader>
          <CardText>
            Usei o FreelaCode pela primeira vez para criar um site e um app de
            entrega de bebidas para a minha distribuidora, recebi um suporte
            muito bom do desenvolvedor, que fez meus produtos do jeito que
            solicitei e em tempo recorde.
          </CardText>
        </Card>

        <Card>
          <CardHeader>
            <Avatar src={avatar2} />
            <CardTitle>
              <h2>Carlos Sagaz</h2>
              <p>CEO da Marine Dock</p>
            </CardTitle>
          </CardHeader>
          <CardText>
            Com o FreelaCode consegui ter um sistema interativo, para o meu
            museu de animais marinhos. Os desenvolvedores envolvidos trabalharam
            muito bem, atenderam rapidamente minha demanda e do jeito que eu
            estava imaginando. Pretendo utilizar o FreelaCode novamente.
          </CardText>
        </Card>
      </CardWrapper>
    </CommentsWrapper>
  );
}

export default Comments;
