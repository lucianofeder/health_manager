import styled from "styled-components";
import Colors from "../../global/Colors";

export const ButtonStyle = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 20px 0 20px 0;
  background-color: ${Colors.BasePurple};
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 12px;
  color: ${Colors.TextColorWhite};
`;
