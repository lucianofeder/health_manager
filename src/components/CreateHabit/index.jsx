import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import api from "../../services/api";

import ModalForm from "../ModalForm";

import { useSelector } from "react-redux";

import Image from "../../images/Undraw/Habit.svg";
import IconAdd from "../../images/Icons/addSTD.svg";

const CreateHabit = () => {
  const token = useSelector((state) => state.users.token);
  const id = useSelector((state) => state.users.user_id);

  const ob = "Campo Obrigatorio";

  const schema = yup.object().shape({
    title: yup.string().required(ob),
    category: yup.string().required(ob),
    frequency: yup.string().required(ob),
    difficulty: yup.string().required(ob),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    data["achieved"] = false;
    data["how_much_achieved"] = 0;
    data["user"] = id;

    api
      .post("habits/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((resp) => {
        reset();
        document.location.reload();
      });
  };

  const inputName = [
    ["title", "Definir Habito"],
    ["category", "Categoria"],
    ["difficulty", "Defina uma dificuldade"],
    ["frequency", "Frequencia"],
  ];

  return (
    <ModalForm
      ImgSrc={IconAdd}
      icon={Image}
      iconWidth="200px"
      title="Criar Habit"
      inputName={inputName}
      buttonName="Criar"
      formAction={handleSubmit(handleForm)}
      reference={register}
      errors={errors}
    />
  );
};

export default CreateHabit;
