import styled from "styled-components";
import Colors from "../../global/Colors";

export const ButtonStyle = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 20px 0 20px 0;
  background-color: ${Colors.BasePurple};
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 20px;
  color: ${Colors.TextColorWhite};
  cursor: pointer;
  outline: none;

  @media (min-width: 700px) {
    width: 200px;
  }
`;
