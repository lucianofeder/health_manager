import styled from "styled-components";

import Modal from "styled-react-modal";

export const StyledModal = Modal.styled`
width: 490px;
min-height: 490px;
max-height: 560px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #E5EDF2;
color: #5777A8;
opacity: ${(props) => props.opacity};
transition: all 0.3s ease-in-out;
position:relative;
border-radius: 1%;

@media(max-width: 640px) {
width: 400px;
`;

export const DivImg = styled.div`
  width: 98%;
  height: 1%;
  position: absolute;
  top: 0;
  transform: translateY(100%);
  /*  border: 1px solid; */

  text-align: right;
  img {
    width: 25px;
    cursor: pointer;
  }
`;

export const DivForm = styled.div`
  width: 90%;
  height: 80%;
  border: 1px solid;
`;

export const ImgStyled = styled.img.attrs((props) => ({
  size: props.size || "1em",
}))`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  cursor: pointer;
  border: 1px solid;
`;
