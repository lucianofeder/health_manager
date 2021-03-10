import { MainContainer } from "./style";
import FormStyle from "../../components/Form";

import LogoTipo from "../../images/Logo/logo2.png";
import Image from "../../images/NewUsers/NewUser.svg";
import Icone from "../../images/NewUsers/IconCadastro.svg";
import Clouds from "../../images/clouds.svg";

const NewUser = () => {
  return (
    <MainContainer>
      <img src={LogoTipo} alt="Logo Tipo" id="logo" />
      <div>
        <img src={Image} alt="image" id="image" />
        <FormStyle
          instructions={{
            icon: Icone,
            title: "Crie Sua Conta",
            inputName: [
              ["name", "userName"],
              ["password", "Password"],
              ["email", "email"],
            ],
            buttonName: "Register",
            buttonAction: "a",
          }}
        />
      </div>

      <img src={Clouds} alt="Nuvens" id="cloud" />
    </MainContainer>
  );
};

export default NewUser;
