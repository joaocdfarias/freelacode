import React from "react";
import { Image, Title, About, Button, Card, CardWrapper, Star } from "./styles";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import StarIcon from "@material-ui/icons/Star";

function Cards() {
  return (
    <CardWrapper>
      <Card>
        <Image src={img1} />
        <Title>
          <h3>Geraldo Shimizu</h3>
          <Star>
            <StarIcon />
            4.7
          </Star>
        </Title>
        <About>
          Desenvolvedor Full Stack a 5 anos, utiliza principalmente React para
          realizar seus trabalhos.
        </About>
        <Button>Entrar em contato</Button>
      </Card>

      <Card>
        <Image src={img2} />
        <Title>
          <h3>Ricardo Borges</h3>
          <Star>
            <StarIcon />
            4.9
          </Star>
        </Title>
        <About>
          Software Engineer a 10 anos, já trabalhou em grandes empresas como
          Riot Games e Blizzard.
        </About>
        <Button>Entrar em contato</Button>
      </Card>

      <Card>
        <Image src={img3} />
        <Title>
          <h3>Joana Torres</h3>
          <Star>
            <StarIcon />
            4.8
          </Star>
        </Title>
        <About>
          Desenvolvedora a 7 anos, trabalhou no Google por 3 anos como
          desenvolvedora front-end.
        </About>
        <Button>Entrar em contato</Button>
      </Card>
    </CardWrapper>
  );
}

export default Cards;
