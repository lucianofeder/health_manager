import styled from "styled-components";

import Modal from "styled-react-modal";

export const StyledModal = Modal.styled`
  width: 30rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #E5EDF2;
  color: #5777A8;
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;

export const DivImg = styled.div`
  width: 90%;
  height: 5%;
  border: 1px solid;
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
