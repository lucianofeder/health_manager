import styled from "styled-components";
import Colors from "../../global/Colors";

export const LastContainer = styled.section`
  width: 100%;
  margin: 20px 0 80px 0;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
  }
`;

export const Adjust = styled.div`
  position: relative;
  .travelImage {
    display: none;
  }
  .scroll {
    width: 300px;
    position: relative;
    top: 0;
    background-color: ${Colors.BasePurple};
    border: solid 3px ${Colors.BaseLightBlue};
    border-bottom: none;
    border-radius: 20px 20px 0 0;
    margin: 0 auto;
  }

  @media (min-width: 900px) {
    display: flex;
    flex-direction: row;
    .travelImage {
      display: block;
      width: 400px;
    }
  }

  @media (min-width: 1100px) {
    .travelImage {
      width: 500px;
    }
  }
`;

export const DivHabits = styled.div`
  text-align: center;
  color: ${Colors.TextColorWhite};
  display: flex;
  flex-direction: column;
  justify-content: center;

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

export const DivAdd = styled.div`
  background-color: ${Colors.BasePurple};
  width: 300px;
  height: 30px;
  border: solid 3px ${Colors.BaseLightBlue};
  border-top: none;
  border-radius: 0 0 20px 20px;
  left: 15px;
  z-index: 2;
  position: absolute;

  @media (min-width: 900px) {
    bottom: -20px;
    left: 0;
  }

  @media (min-width: 1051px) {
    left: 137px;
  }

  @media (min-width: 1100px) {
    left: 87px;
  }
`;
