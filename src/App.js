import { Container } from "@material-ui/core";
import { ThemeProvider } from "styled-components";
import light from "./Themes/light";
import Header from "./Header";
import Banner from "./Banner";
import About from "./About";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Container maxWidth="lg">
        <Header />
        <Banner />
        <About />
      </Container>
    </ThemeProvider>
  );
}

export default App;
