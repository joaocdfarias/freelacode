import { Container } from "@material-ui/core";
import { ThemeProvider } from "styled-components";
import light from "./Themes/light";
import Header from "./Header";
import Banner from "./Banner";
import About from "./About";
import Devs from "./Devs";
import Comments from "./Comments";
import DataCard from "./DataCard";
import Footer from "./Footer";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Container maxWidth="lg">
        <Header />
        <Banner />
        <About />
        <Devs />
        <Comments />
        <DataCard />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
