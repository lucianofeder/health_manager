import styled from "styled-components";
import Button from "../Button/";

export const Container = styled.div`
  max-width: 900px;
  background-color: #fff;
  padding: 60px 30px 30px 30px;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  @media (max-width: 900px) {
    margin: 0 2px;
  }
  @media (max-width: 450px) {
    padding: 30px 15px 15px 15px;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  box-sizing: border-box;
  margin-bottom: 30px;
  @media (max-width: 640px) {
    padding: 0 15px;
  }
  @media (max-width: 400px) {
    padding: 0 5px;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
  @media (max-width: 640px) {
    font-size: 2.4rem;
    margin-right: 20px;
  }
  @media (max-width: 430px) {
    font-size: 2rem;
  }
  @media (max-width: 400px) {
    font-size: 1.8rem;
  }
`;

export const ButtonStyled = styled(Button)`
  margin-right: 30px;
`;
