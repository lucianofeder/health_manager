import styled from "styled-components";
import Colors from "../../global/Colors";

export const ProgressContainer = styled.div`
  display: flex;
  align-items: center;

  #ProgressBar {
    font-weight: bold;
    font-size: 60px;
    margin: 5px;
    color: ${({ progress }) =>
      (progress < 25 && "red") ||
      (progress < 50 && "yellow") ||
      (progress < 75 && "green")};
  }
  #number {
    font-weight: bold;
  }
`;

export const ProgressButtons = styled.img`
  cursor: pointer;
  width: 28px;
  height: 28px;
`;
