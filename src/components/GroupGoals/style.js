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

export const ListStyle = styled.li`
  list-style-type: none;
`;
