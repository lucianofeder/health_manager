import styled from "styled-components";
import Colors from "../../global/Colors";

export const ListedCard = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${Colors.BorderBottom};
  max-width: 900px;
  padding: 10px 0;
  @media (max-width: 550px) {
  }
`;

export const Img = styled.img`
  width: 100px;
  margin-left: 25px;
  @media (max-width: 430px) {
    width: 70px;
  }
`;

export const ImgUser = styled.img`
  cursor: pointer;
  height: 100%;
  margin-left: 25px;

  @media (max-width: 430px) {
    width: 60px;
  }
`;

export const MainText = styled.h2`
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: ${Colors.BasePurpleDarker};
  }
  @media (max-width: 550px) {
    font-size: 1.3rem;
  }
`;

export const ExtraMainText = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;

  width: 30%;
`;

export const ExtraTextArea = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  width: 50%;
`;

export const ExtraText = styled.h3`
  font-size: 1rem;
  margin: 0 2px;
  cursor: pointer;

  &:hover {
    color: ${Colors.BasePurpleDarker};
  }

  @media (max-width: 550px) {
    font-size: 0.9rem;
  }
`;
