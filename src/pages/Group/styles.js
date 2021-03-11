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
`;
export const Title = styled.h1`
  margin: 0;
  padding: 0;
`;

export const Subtitle = styled.h3`
  margin: 0;
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
`;
export const InfoContainer = styled.div`
  width: 45%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: lightblue;
`;

export const DescriptioCard = styled.div`
  width: 60%;
  height: 80%;
  border-radius: 20px;
  margin: 10px 0 10px 0;
  background-color: ${Colors.BasePurple};
`;

export const ActivitiesCard = styled(DescriptioCard)`
`;

export const GoalsCard = styled(DescriptioCard)`
`;

export const UsersContainer = styled.div`
  width: 45%;
  height: 100%;
  border-radius: 20px;
  background-color: lightgoldenrodyellow;
`;

export const ListStyle = styled.li`
  list-style-type: none;
`;
