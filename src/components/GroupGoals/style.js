import styled from "styled-components";
import Colors from "../../global/Colors";
import { FaRegTrashAlt } from "react-icons/fa";

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
export const ImageGroupStyles = styled.img`
  width: 400px;
  @media (max-width: 500px) {
    width: 30%;
  }
  @media (max-width: 768px) {
    width: 40%;
  }
`;
export const NameGroupContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 20px 0 20px 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
export const Title = styled.h1`
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
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`;
export const InputEditStyled = styled.input`
  width: 80%;
  height: 80%;
  background: ${Colors.BackgroundBaseGray};
`;
export const InfoContainer = styled.div`
  width: 25%;
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

export const CardContainer = styled.div`
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

export const CardContainerSecond = styled(CardContainer)`
  border-top: 0;
  border-radius: 0 0 20px 20px;
  margin: 0 0 10px 0;
  min-height: 10px;
`;

export const ListStyle = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 10px 0 10px 0;
`;

export const DivStyledItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const DivAdjust = styled.div`
  display: flex;
  width: ${(props) => props.first && "100%"};
  justify-content: ${(props) => props.first && "center"};
`;

export const DivStyled = styled.div`
  display: ${(props) => props.first && "flex"};
  justify-content: ${(props) => props.first && "center"};
  padding: ${(props) => (props.first ? "" : " 0 5px 0 5px")};
  width: ${(props) => props.first && "127px"};
`;

export const DivStyledIcons = styled.div`
  display: flex;
  justify-content: space-around;

  min-width: 55px;
  height: 20px;
`;

export const ImgStyled = styled(FaRegTrashAlt)`
  cursor: pointer;
  width: 20px;
  height: 20px;
`;
