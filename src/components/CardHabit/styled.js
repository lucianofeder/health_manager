import styled from "styled-components";
import Colors from "../../global/Colors";

export const LastContainer = styled.section`
  width: 100%;
  margin: 20px 0;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
  }
`;

export const Adjust = styled.div`
  img {
    display: none;
  }
`;

export const DivHabits = styled.div`
  background-color: ${Colors.BasePurple};
  border: solid 4px ${Colors.BaseLightBlue};
  border-radius: 10px;
  width: 310px;
  margin: 0 auto;
  text-align: center;
  color: ${Colors.TextColorWhite};

  h3 {
    margin: 0;
    margin-top: -10px;
  }
`;

export const HabitLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0;
`;
