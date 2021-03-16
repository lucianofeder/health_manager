import { Container, LogoStyled, Div } from "./style";
import logo2 from "../../images/Logo/logo2.png";
import ImageLogin from "../../images/Login/imageLogin.svg";
import clouds from "../../images/Undraw/clouds.svg";
import FormStyle from "../../components/Form";
import IconLogin from "../../images/Login/iconeLogin.svg";
import { Redirect, useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { signInThunk } from "../../store/modules/users/thunk";
import { useState } from "react";

const Login = () => {
  const dispatch = useDispatch();

  const [erroMsg, setErroMsg] = useState(false);

  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required("Campo Obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });
  const { user_id } = useSelector((state) => state.users);

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    api
      .post("sessions/", data)
      .then((response) => {
        const token = response.data.access;
        const { user_id } = jwt_decode(token);

        localStorage.clear();
        localStorage.setItem("token", token);
        localStorage.setItem("user_id", user_id);
        dispatch(signInThunk(token, user_id));
        history.push(`/HomeUser/${user_id}`);
      })
      .catch((err) => {
        setErroMsg(true);
        setTimeout(() => {
          setErroMsg(false);
        }, 3000);
      });
    reset();
  };

  const instruction = {
    icon: IconLogin,
    title: "Fazer Login",
    inputName: [
      ["username", "USERNAME"],
      ["password", "SENHA", "password"],
    ],
    buttonName: "Login",

    iconWidth: 75,
  };
  const form = {
    formAction: handleSubmit(handleForm),
    ref: register,
    errors: errors,
  };

  return (
    <Container>
      {user_id && <Redirect to={`/HomeUser/${user_id}`} />}

      <Div>
        <LogoStyled small src={logo2} />
      </Div>

      <Div>
        <LogoStyled medium src={ImageLogin} />
        <section id="form">
          <FormStyle form={form} instructions={instruction} />
          {erroMsg && (
            <p
              style={{
                color: "red",
                fontSize: "15px",
                margin: "0",
                marginTop: "-20px",
              }}
            >
              Login ou senha invalidos{" "}
            </p>
          )}
        </section>
      </Div>

      <LogoStyled fullWidth src={clouds} />
    </Container>
  );
};

export default Login;
