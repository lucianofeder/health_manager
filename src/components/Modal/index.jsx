/*!---------------------------------------------------

Quando for integrar o FormStyled, basta colocá-lo dentro do componente DivForm
Para abrir o formulario em outra página, a função toggleModal está no onClick do elemento
ImgStyled, fora do <StyledModal/>, no topo.

!---------------------------------------------------

A prop recebida pelo Modal -> ImgSrc, é o src da ícone clicável que abrirá o Modal e estará nas
páginas HomeUser e HomeGroup


*/

import { useState } from "react";
import { StyledModal, DivImg, ImgStyled, DivForm } from "./style";

import Button from "../Button";

import close from "../../images/Icons/close.png";

const Modal = ({ isButton, nameBtn, ImgSrc, children }) => {
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
      {/* Aqui embaixo estará o ícone clicável que abrirá o Modal  */}

      {isButton ? (
        <Button action={(e) => toggleModal(e)}>{nameBtn}</Button>
      ) : (
        <ImgStyled onClick={(e) => toggleModal(e)} src={ImgSrc} alt="icon" />
      )}
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

        {children}
      </StyledModal>
    </>
  );
};

export default Modal;
