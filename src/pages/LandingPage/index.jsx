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
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const LandingPage = () => {
  const history = useHistory();
  const { user_id } = useSelector((state) => state.users);

  return (
    <>
      <Container>
        {user_id && <Redirect to={`/HomeUser/${user_id}`} />}
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
              <Button action={() => history.push("/Login")}>Login</Button>
              <Button action={() => history.push("/NewUser")}>Register</Button>
            </DivButton>
          </DivStyled>
        </DivAjust>

        <LogoStyled order="2" fullWidth src={clouds} />
      </Container>
    </>
  );
};

export default LandingPage;
