import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import api from "../../services/api";

import ModalForm from "../ModalForm";

import Image from "../../images/Undraw/creatGroup.svg";
import { useSelector } from "react-redux";

const CreateGroup = () => {
  let token = useSelector((state) => state.users.token);

  const ob = "Campo Obrigatorio";

  const schema = yup.object().shape({
    name: yup.string().required(ob),
    description: yup.string().required(ob),
    category: yup.string().required(ob),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    api
      .post("groups/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((resp) => {
        reset();
      });
  };

  const inputName = [
    ["name", "Nome do Grupo"],
    ["description", "Descreva seu grupo"],
    ["category", "Categoria"],
  ];

  return (
    <ModalForm
      isButton={true}
      nameBtn="New Group"
      icon={Image}
      iconWidth="200px"
      title="Criar grupo"
      inputName={inputName}
      buttonName="Criar"
      formAction={handleSubmit(handleForm)}
      reference={register}
      errors={errors}
    />
  );
};

export default CreateGroup;
