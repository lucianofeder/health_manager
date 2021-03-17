import styled from "styled-components";
import Colors from "../../global/Colors";

export const ActivitiesCard = styled.div`
  position: relative;
  width: 310px;
  min-height: 100px;
  padding: 15px 10px 15px 10px;
  border-radius: 20px;
  margin: 10px 0 10px 0;
  background-color: ${Colors.BasePurple};
  color: #fff;
  border: 3px solid ${Colors.BaseLightBlue};
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Subtitle = styled.h1`
  margin-top: 10px;
  padding: 0;
  font-weight: normal;
`;
export const ListStyle = styled.li`
  list-style-type: none;
`;
export const Hr = styled.hr`
  width: 80%;
`;
export const ButtonsContainer = styled.div`
  width: 7%;
  display: flex;
  justify-content: end;
`;
export const Ul = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
`;

export const AddButtonDiv = styled.div`
  width: 100%;
  margin: 10px 0 10px 0;
  display: flex;
  justify-content: center;
`;
