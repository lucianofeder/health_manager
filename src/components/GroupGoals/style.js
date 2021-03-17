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
  width: 310px;
  min-height: 100px;
  padding: 30px 10px 30px 10px;
  background-color: ${Colors.BasePurple};
  border: solid 3px ${Colors.BaseLightBlue};
  border-radius: 15px;
  color: ${Colors.TextColorWhite};
  text-align: center;
  position: relative;

  h1 {
    margin: 0;
    font-size: 25px;
    font-weight: normal;
    margin-bottom: 10px;
  }

  p {
    width: 80%;
    margin: 10px auto;
  }

  .iconModal {
    position: absolute;
    right: 5px;
    top: 5px;
    display: flex;

    h1 {
      color: ${Colors.BaseGreen};
      font-size: 30px;
      margin: 0 5px;
    }

    img {
      margin: 0;
      width: 25px;
      border: none;
    }
  }

  .goal {
    span {
      color: ${Colors.BaseGreen};
    }
  }
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
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const DivAdjust = styled.div`
  display: flex;
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
