import { MainContainer } from "./style";
import FormStyle from "../../components/Form";

import LogoTipo from "../../images/Logo/logo2.png";
import Image from "../../images/NewUsers/NewUser.svg";
import Icone from "../../images/NewUsers/IconCadastro.svg";
import Clouds from "../../images/Undraw/clouds.svg";


import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useHistory } from "react-router-dom";

import api from "../../services/api";

const NewUser = () => {
  const history = useHistory();

  const ob = "Campo Obrigatorio";

  const schema = yup.object().shape({
    username: yup.string().required(ob),
    password: yup.string().min(6, "Minimo de 6 Dígitos").required(ob),
    email: yup.string().email("Email invalido").required(ob),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    api
      .post("users/", data)
      .then((resp) => {
        reset();
        history.push("/Login");
      })
      .catch((e) => console.log(e));
  };

  return (
    <MainContainer>
      <img src={LogoTipo} alt="Logo Tipo" id="logo" />
      <div>
        <img src={Image} alt="AnotherImage" id="image" />
        <FormStyle
          instructions={{
            icon: Icone,
            title: "Crie Sua Conta",
            iconWidth: "200px",
            inputName: [
              ["username", "userName"],
              ["password", "Password"],
              ["email", "email"],
            ],
            buttonName: "Register",
          }}
          form={{
            formAction: handleSubmit(handleForm),
            ref: register,
            errors: errors,
          }}
        />
      </div>

      <img src={Clouds} alt="Nuvens" id="cloud" />
    </MainContainer>
  );
};

export default NewUser;
