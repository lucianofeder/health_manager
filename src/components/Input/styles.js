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

const InputAreaStyled = styled.div((props) => ({
  height: "30px",
  backgroundColor: Colors.BackgroundInput,
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

// shadowColor: "#F00",
// shadowOffset: { width: 10, height: 10 },
// shadowRadius: 2,

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
