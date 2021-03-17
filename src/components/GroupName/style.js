import styled from "styled-components";
import Colors from "../../global/Colors";
export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${Colors.BackgroundBaseGray};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const LimitContainer = styled.div`
  width: 100%;
  max-width: 1733px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: space-between;
`;
export const NameGroupContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 20px 0 20px 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
export const ImageGroupStyles = styled.img`
  width: 400px;
  @media (max-width: 500px) {
    width: 30%;
  }
  @media (max-width: 768px) {
    width: 40%;
  }
`;
export const Title = styled.h1`
  margin: 0;
  padding: 0;
`;
export const Subtitle = styled.h3`
  margin-top: 10px;
  padding: 0;
`;
export const TypeGroup = styled.h4`
  margin: 0;
  padding: 0;
`;
export const GroupDescriptionContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`;
export const InfoContainer = styled.div`
  width: 45%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
export const DescriptioCard = styled.div`
  width: 60%;
  height: 80%;
  border-radius: 20px;
  margin: 10px 0 10px 0;
  background-color: ${Colors.BasePurple};
`;

export const ActivitiesCard = styled(DescriptioCard)`
  color: #fff;
  border: 3px solid ${Colors.BaseLightBlue};
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const ButtonStyles = styled.button`
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  outline: none;
`;
export const ImageButtonStyles = styled.img`
  width: 100%;
  height: 100%;
`;

export const GoalsCard = styled(DescriptioCard)``;
export const UsersContainer = styled.div`
  width: 45%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
export const UserSubscribedCard = styled.ul`
  text-align: center;
  width: 60%;
  height: 80%;
  margin: 10px 0 10px 0;
  padding: 0;
  background-color: ${Colors.BasePurple};
  border: 1px solid red;
`;
export const ListStyle = styled.li`
  list-style-type: none;
`;

export const Hr = styled.hr`
  width: 80%;
`;

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
