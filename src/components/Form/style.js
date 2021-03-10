import styled from "styled-components";
import Colors from "../../global/Colors";

export const FormContainer = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  padding: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  img {
    width: 70%;
  }

  h1 {
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
