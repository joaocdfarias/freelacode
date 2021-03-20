import { Container } from "@material-ui/core";
import { ThemeProvider } from "styled-components";
import light from "./Themes/light";
import Header from "./Header";
import Banner from "./Banner";

function App() {
  return (
    <ThemeProvider theme={light}>
      <Container maxWidth="lg">
        <Header />
        <Banner />
      </Container>
    </ThemeProvider>
  );
}

export default App;
