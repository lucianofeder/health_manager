import styled from "styled-components";
import Colors from "../../global/Colors";

const FooterStyled = styled.div`
  color: white;
  background-color: ${Colors.BasePurple};
  text-align: center;
  display: inline-block;
  padding: 5px 25px;
  border: 3px solid ${Colors.BaseLightBlue};
  border-radius: 10px;
  width: 260px;

  @media (min-width: 700px) {
    width: 290px;
  }

  div#containerInfos {
    display: flex;
  }
  div#containerUsers {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    margin: 10px;
    display: inline;
  }
  h2 {
    font-weight: lighter;
  }
  img {
    width: 45px;
  }
  span {
    font-size: 25px;
  }
`;

export default FooterStyled;
