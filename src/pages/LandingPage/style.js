import styled from "styled-components";
import Colors from "../../global/Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  min-height: 630px;
  max-height: 660px;

  background: ${Colors.BackgroundLinear};
  font-family: Montserrat;
  font-size: 30px;
  font-style: normal;
  font-weight: lighter;
  color: ${Colors.BasePurple};
  overflow-x: hidden;
  overflow-y: hidden;
`;
