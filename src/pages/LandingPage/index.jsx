import {
  Container,
  Div,
  LogoStyled,
  DivStyled,
  DivAjust,
  DivButton,
} from "./style";
import Button from "../../components/Button";
import landingPage from "../../images/Logo/landingPage.svg";
import logo1 from "../../images/Logo/logo1.png";
import clouds from "../../images/Undraw/clouds.svg";

const LandingPage = () => {
  return (
    <>
      <Container>
        <DivAjust>
          <Div large order="1">
            <LogoStyled src={landingPage} />
          </Div>

          <DivStyled order="" internalOrder="1">
            <Div medium>
              <LogoStyled medium src={logo1} />
            </Div>
            <Div small>Habitualmente Conectados</Div>
            <DivButton>
              <Button>Login</Button>
              <Button>Register</Button>
            </DivButton>
          </DivStyled>
        </DivAjust>

        <LogoStyled order="2" fullWidth src={clouds} />
      </Container>
    </>
  );
};

export default LandingPage;
