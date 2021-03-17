import styled from "styled-components";
import Colors from "../../global/Colors";
import { FaRegTrashAlt } from "react-icons/fa";

export const ActivitiesCard = styled.div`
  position: relative;
  width: 310px;
  padding: 15px 10px 15px 10px;
  border-radius: 20px 20px 0 0;
  margin: 10px 0 0 0;
  background-color: ${Colors.BasePurple};
  color: #fff;
  border: 3px solid ${Colors.BaseLightBlue};
  border-bottom: 0;
`;
export const ActivitiesCardSecond = styled(ActivitiesCard)`
  border-top: 0;
  border-radius: 0 0 20px 20px;
  margin: 0 0 10px 0;
  min-height: 10px;
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
  width: 20%;
  display: flex;
  justify-content: space-between;
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

export const ImgStyled = styled(FaRegTrashAlt)`
  cursor: pointer;
  width: 20px;
  height: 20px;
`;
