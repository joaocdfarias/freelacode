import { Container } from "@material-ui/core";
import { ThemeProvider } from "styled-components";
import light from "./Themes/light";
import Header from "./Header";

function App() {
  return (
    <ThemeProvider theme={light}>
      <Container maxWidth="lg">
        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
