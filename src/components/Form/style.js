import styled from "styled-components";
import Colors from "../../global/Colors";

export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  padding: 10px;
  padding-bottom: 30px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  background-color: white;
  border-radius: 10px;

  img {
    width: 70%;
  }

  h1 {
    font-size: 25px;
    color: ${Colors.TextColorBlack};
    margin: 10px 0 0 0;
    font-weight: lighter;
  }

  form {
    width: 80%;
  }

  @media (min-width: 650px) {
    width: 400px;
  }
`;
