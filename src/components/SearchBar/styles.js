import styled from "styled-components";
import Colors from "../../global/Colors";

export const SearchBarCointainer = styled.div`
  width: 100%;
  height: 100px;
  border: none;
  background-color: ${Colors.BackgroundBaseGray};
  display: flex;
  flex-direction: row;
  align-items: center;

  .InputBar {
    margin: 0 auto;
    width: 95%;
    height: 25px;
    border: none;
    border-radius: 7px;
    background-color: ${Colors};
    font-size: 12px;
    font-weight: bolder;
    color: ${Colors.TextColorWhite};
  }
`;
