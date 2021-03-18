import styled from "styled-components";

export const ProgressContainer = styled.div`
  display: flex;
  align-items: center;

  #ProgressBar {
    font-weight: bold;
    font-size: 60px;
    margin: 5px;
    color: ${({ progress }) =>
      (progress < 25 && "red") ||
      (progress < 50 && "orange") ||
      (progress < 75 && "yellow") ||
      (progress <= 100 && "green")};
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
