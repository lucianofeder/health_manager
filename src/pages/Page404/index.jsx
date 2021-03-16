import { Container, LogoStyled, Div } from "./style";
import logo2 from "../../images/Logo/logo2.png";
import error from "../../images/Error404/error.svg";
import clouds from "../../images/Undraw/clouds.svg";

import { useHistory } from "react-router-dom";

const Page404 = () => {
  const history = useHistory();
  setTimeout(() => {
    history.push("/");
  }, 2500);

  return (
    <Container>
      <Div>
        <LogoStyled small src={logo2} />
      </Div>
      <Div>
        <LogoStyled medium src={error} />
      </Div>
      <Div>
        <span>Redirecionando...</span>
      </Div>
      <LogoStyled fullWidth src={clouds} />
    </Container>
  );
};

export default Page404;
