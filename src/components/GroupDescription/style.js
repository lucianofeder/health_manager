import styled from "styled-components";
import Colors from "../../global/Colors";

export const CardContainer = styled.div`
  width: 310px;
  min-height: 100px;
  padding: 15px 10px 15px 10px;
  background-color: ${Colors.BasePurple};
  border: solid 3px ${Colors.BaseLightBlue};
  border-radius: 15px;
  color: ${Colors.TextColorWhite};
  position: relative;

  #pen {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
  }

  h1 {
    margin: 0;
    font-size: 25px;
    font-weight: normal;
    margin-bottom: 10px;
  }
`;
