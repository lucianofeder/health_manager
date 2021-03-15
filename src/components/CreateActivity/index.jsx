import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import api from "../../services/api";

import ModalForm from "../ModalForm";

import Image from "../../images/Undraw/creatActivy.svg";
import IconAdd from "../../images/+.svg";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CreateActivy = () => {
  const { id } = useParams();

  let token = useSelector((state) => state.users);

  const ob = "Campo Obrigatorio";

  const schema = yup.object().shape({
    title: yup.string().required(ob),
    realization_time: yup.date().required(ob),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    data["group"] = id;
    api
      .post("activities/", data, {
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
    ["title", "Nome da tarefa"],
    ["realization_time", "Defina uma data"],
  ];

  return (
    <ModalForm
      ImgSrc={IconAdd}
      icon={Image}
      iconWidth="180px"
      title="Criar Goal"
      inputName={inputName}
      buttonName="Criar"
      formAction={handleSubmit(handleForm)}
      reference={register}
      errors={errors}
    />
  );
};

export default CreateActivy;
