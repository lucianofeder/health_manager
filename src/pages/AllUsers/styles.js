import styled from "styled-components";
import Colors from "../../global/Colors";

export const Main = styled.main`
  background-color: ${Colors.BackgroundBaseGray};
  width: 100%;
  min-height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  max-width: 900px;
  box-sizing: border-box;
  flex-direction: column;
  padding-bottom: 60px;
  min-height: calc(100vh - 180px);
  margin: 0 auto;
`;
