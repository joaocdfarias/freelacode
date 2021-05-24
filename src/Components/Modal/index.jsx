import React, { useContext } from 'react'
import { ModalBackground, Button, ModalWrapper, ModalImage } from './styles'

import { ModalContext } from '../../Contexts/ModalContext'

function Modal() {
  const { handleClick } = useContext(ModalContext)

  return (
    <div>
      <ModalBackground active>
        <ModalWrapper>
          <ModalImage></ModalImage>
          <Button onClick={handleClick}>X</Button>
        </ModalWrapper>
      </ModalBackground>
    </div>
  )
}

export default Modal
