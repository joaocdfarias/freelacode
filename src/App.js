import React from 'react'
//
import light from './Themes/light'
import Header from './Header'
import Banner from './Banner'
import About from './About'
import Devs from './Devs'
import Comments from './Comments'
import DataCard from './DataCard'
import Footer from './Footer'
import Modal from './Components/Modal'
//
import { Container } from '@material-ui/core'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyle'
import { ModalContext } from './Contexts/ModalContext'

function App() {
  const [openModal, setOpenModal] = React.useState(false)

  function handleClick() {
    setOpenModal(!openModal)
    console.log(openModal)
  }

  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Container maxWidth="lg">
        <ModalContext.Provider value={{ handleClick }}>
          {openModal ? <Modal /> : null}
          <Header />
          <Banner />
        </ModalContext.Provider>
        <About />
        <Devs />
        <Comments />
        <DataCard />
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default App
