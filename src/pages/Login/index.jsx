import { Container, LogoStyled, Div } from "./style";
import logo2 from "../../images/Logo/logo2.png";
import ImageLogin from "../../images/Login/imageLogin.svg";
import clouds from "../../images/Undraw/clouds.svg";
import FormStyle from "../../components/Form";
import IconLogin from "../../images/Login/iconeLogin.svg";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { signInThunk } from "../../store/modules/users/thunk";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const schema = yup.object().shape({
    username: yup.string().required("Campo Obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });
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
      .catch((err) => console.log(err));
    reset();
  };

  const instruction = {
    icon: IconLogin,
    title: "Fazer Login",
    inputName: [
      ["username", "USERNAME"],
      ["password", "SENHA"],
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
      <Div>
        <LogoStyled small src={logo2} />
      </Div>

      <Div>
        <LogoStyled medium src={ImageLogin} />
        <section id="form">
          <FormStyle form={form} instructions={instruction} />
        </section>
      </Div>

      <LogoStyled fullWidth src={clouds} />
    </Container>
  );
};

export default Login;
