import styled from "styled-components";
import Colors from "../../global/Colors";

const FooterStyled = styled.footer`
  background-color: ${Colors.BaseLightBlue};
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    padding: 15px 0;
  }
`;

export default FooterStyled;
