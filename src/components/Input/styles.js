import styled from "styled-components";
import Colors from "../../global/Colors";

export const InputStyled = styled.input`
  width: 100%;
  height: 100%;
  background-color: ${Colors.BackgroundInput};
  color: ${Colors.TextColorBlack};
  border: none;
  outline: none;
  padding-left: 10px;
`;
export const ErrorMesagem = styled.span`
  color: ${Colors.ErrorInput};
  font-size: 15px;
  position: absolute;
  top: -15px;
  right: 0;
`;

const InputAreaStyled = styled.div`
  height: 30px;
  background-color: ${Colors.BackgroundInput};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 4px
    ${(props) => (props.error ? Colors.ErrorInput : Colors.ShadowColor)};
`;

export const InputArea = styled(InputAreaStyled)`
  outline: 1px solid transparent;
  transition: 300ms;
  margin: 20px 0;

  &:focus-within {
    box-shadow: 0px 2px 4px
      ${(props) =>
        props.error ? Colors.ErrorInput : Colors.ShadowColorHighlight};
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
