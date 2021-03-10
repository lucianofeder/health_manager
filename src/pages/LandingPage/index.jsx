import { Container, Div, LogoStyled, DivStyled, DivAjust } from "./style";
import landingPage from "../../images/Logo/landingPage.svg";
import logo1 from "../../images/Logo/logo1.png";
import clouds from "../../images/clouds.svg";

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
            <Div>@components/Button</Div>
          </DivStyled>
        </DivAjust>

        <LogoStyled order="2" fullWidth src={clouds} />
      </Container>
    </>
  );
};

export default LandingPage;
