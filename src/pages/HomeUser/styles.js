import styled from "styled-components";
import Colors from "../../global/Colors";

export const MainContainer = styled.section`
  width: 100%;
  height: 100%;
  background: ${Colors.BackgroundBaseGray};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const LimitContainer = styled.div`
  max-width: 1733px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: space-between;
`;

export const UserContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .headerUser {
    width: 100%;
  }

  @media (max-width: 1050px) {
  }
`;

export const Avatar = styled.img`
  width: 140px;
  height: 140px;
  border: 3px solid ${Colors.BaseGreen};
  border-radius: 100%;
`;

export const GroupInfo = styled.div`
  width: 300px;
  height: 80px;

  h2 {
    line-height: 0;
    cursor: pointer;
    &:hover {
      color: ${Colors.BasePurpleDarker};
    }
  }
  h3 {
    font-weight: normal;
  }
`;

export const DivGroup = styled(UserContainer)`
  flex-direction: row;

  img {
    width: 250px;
    height: 140px;
    @media (max-width: 700px) {
      display: none;
    }
  }

  img.calendarIcon {
    width: 20%;
    height: 20%;
    margin: 10px 10px;
  }

  @media (max-width: 1050px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

export const BioCardContainer = styled.div`
  max-width: 400px;
  width: 90vw;
  height: 250px;
  border-radius: 10px;
  margin: 2% 0 30px 2%;
  background-color: ${Colors.BasePurple};

  @media (max-width: 1050px) {
    margin-bottom: 30px;
  }
`;

export const Community = styled.img`
  width: 100%;
  margin: 0 18px 0 40px;
`;

export const CalendarCardContainer = styled(BioCardContainer)``;

export const LastContainer = styled(UserContainer)``;

export const DivHabits = styled(UserContainer)`
  flex-direction: row;

  @media (max-width: 1050px) {
    margin-bottom: 30px;
    img {
      display: none;
    }
  }
`;

export const HabitsCardContainer = styled(BioCardContainer)``;

export const Traveler = styled.img`
  width: 400px;
  height: 350px;
`;

export const DivHabitsCard = styled.div`
  padding: 5px 5px 5px 5px;
`;
