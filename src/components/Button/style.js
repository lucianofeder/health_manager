import styled from "styled-components";
import Colors from "../../global/Colors";

export const ButtonStyle = styled.button`
  border: 5px solid ${Colors.BasePurpleDarker};
  border-radius: 20px 0 20px 0;
  height: 50px;
  width: 140px;

  background: transparent;
  color: ${Colors.BasePurpleDarker};
  padding: 8px 16px;
  font-weight: bold;
  font-size: 20px;

  cursor: pointer;
  outline: transparent;
  background: 0.25s ease, color 0.25s ease, box-shadow 0.15s ease;
  box-shadow: 8px 8px 0 #888;

  &:hover {
    color: white;
    background: ${Colors.BasePurpleDarker};
    box-shadow: 4px 4px 0 #888;
  }

  &:active {
    box-shadow: 0 0 0 #888;
  }
  @media (min-width: 700px) {
    width: 200px;
  }
`;
