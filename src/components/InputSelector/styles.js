import styled from "styled-components";
import Colors from "../../global/Colors";

export const SelectStyled = styled.select`
  width: 100%;
  height: 100%;
  background-color: ${Colors.BackgroundInput};
  color: ${Colors.TextColorBlack};
  border: none;
  outline: none;
  padding-left: 10px;
  cursor: pointer;
  option {
    background-color: ${Colors.BackgroundInput};
    color: ${Colors.TextColorBlack};
  }
`;

const InputAreaStyled = styled.div`
  height: 30px;
  background-color: ${Colors.BackgroundInput};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${(props) => props.error} && 0px 2px 4px ${Colors.ShadowAlert};
`;

export const InputArea = styled(InputAreaStyled)`
  outline: 1px solid transparent;
  box-shadow: 0px 2px 4px ${Colors.ShadowColor};
  transition: 300ms;
  margin: 20px 0;

  &:focus-within {
    box-shadow: 0px 2px 4px ${Colors.ShadowColorHighlight};
  }
`;

export const Placeholder = styled.span`
  font-size: 20px;
  color: ${Colors.TextColorInput};
  position: absolute;
  text-transform: uppercase;
  font-weight: 300;
  pointer-events: none;
  transition: 300ms;
  ${InputArea}:focus-within & {
    color: transparent;
  }
`;
