import styled from "styled-components";
import Colors from "../../global/Colors";

export const ListedCard = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 2px solid ${Colors.BorderBottom};
  max-width: 900px;
  padding: 10px 0;
  @media (max-width: 550px) {
  }
`;

export const Img = styled.img`
  width: 100px;
`;

export const ImgUser = styled.img`
  height: 100%;
`;

export const MainText = styled.h2`
  font-size: 1.5rem;
  @media (max-width: 550px) {
    font-size: 1.3rem;
  }
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
  @media (max-width: 550px) {
    font-size: 0.9rem;
  }
`;
