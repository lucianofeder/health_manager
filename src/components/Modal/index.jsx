/*
  Quando for integrar o FormStyled, basta colocá-lo dentro do componente DivForm
  Para abrir o formulario em outra página, basta colocar a função toggleModal no onClick de algum elemento
  fora do <StyledModal/>
*/

import { useState } from "react";
import { StyledModal, DivImg, DivForm } from "./style";

import close from "../../images/Icons/close.png";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const toggleModal = (e) => {
    setOpacity(0);
    setIsOpen(!isOpen);
  };

  const afterOpen = () => {
    setTimeout(() => {
      setOpacity(1);
    }, 200);
  };

  const beforeClose = () => {
    return new Promise((resolve) => {
      setOpacity(0);
      setTimeout(resolve, 300);
    });
  };
  return (
    <>
      {/*Pode-se colocar algum elemento para click nessa mesma posição do button para ser renderizado na página*/}
      <button onClick={() => toggleModal()}>Open</button>
      <StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
      >
        <DivImg>
          <img src={close} alt="logo" onClick={() => toggleModal()}></img>
        </DivImg>
        <DivForm></DivForm>
      </StyledModal>
    </>
  );
};

export default Modal;
