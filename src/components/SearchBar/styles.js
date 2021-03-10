import styled from "styled-components";
import Colors from "../../global/Colors";

export const SearchBarCointainer = styled.div`
  margin: 0 auto;
  width: 100%;
  border-radius: 5px;
  height: 30px;
  background-color: ${Colors.BackgroundInput};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 1px solid transparent;
  box-shadow: 0px 2px 4px ${Colors.ShadowColor};
`;

export const InputContainer = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding-left: 10px;
  background-color: ${Colors.BackgroundInput};
  color: ${Colors.TextColorBlack};
  border: none;
  outline: none;
`;

export const IconButtonContainer = styled.button`
  display: flex;
  align-items: center;
  width: 30px;
  height: 100%;
  padding: 0;
  margin: 0;
  border: 0;
  border-radius: 5px;
  outline: none;

  img {
    height: 25px;
    width: 25px;
  }
`;
