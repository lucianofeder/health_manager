import ModalForm from "../../components/ModalForm";
import { Subtitle, GoalsCard, ListStyle } from "../../pages/Group/styles";

import add from "../../images/add.svg";
import goalsModal from "../../images/Icons/goalsModal.svg";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import api from "../../services/api";

const GroupGoals = () => {
  const { id } = useParams();
  const { token } = useSelector((state) => state.users);

  const [loaded, setLoaded] = useState(false);
  const [group, setGroup] = useState([]);

  const schema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),
    difficulty: yup.string().required("Campo obrigatório"),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getDataPageGroup = async () => {
    await api.get(`groups/${id}/`).then((res) => setGroup(res.data));

    setLoaded(true);
  };

  const inputName = [
    ["title", "NOME DA META"],
    ["difficulty", "DIFICULDADE"],
  ];

  const handleForm = (data) => {
    const newData = {
      title: data.title,
      difficulty: data.difficulty,
      group: group.id,
      // !MUDAR ACHIEVED COM BARRA DE STATUS
      how_much_achieved: 70,
    };
    api
      .post(`goals/`, newData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => setGroup({ ...group, goals: [...group.goals, newData] }));

    setLoaded(true);
  };

  useEffect(() => {
    !loaded && getDataPageGroup();
  });
  return (
    <>
      <GoalsCard>
        <Subtitle>Goals</Subtitle>

        <ModalForm
          isButton={false}
          ImgSrc={add}
          icon={goalsModal}
          iconWidth="300px"
          title="Create Goals"
          inputName={inputName}
          buttonName="Enviar"
          formAction={handleSubmit(handleForm)}
          reference={register}
          errors={errors}
        />

        {loaded && group.goals
          ? group.goals.map((item) => (
              <ul key={item.id}>
                <ListStyle>
                  {item.title} || {item.difficulty} ||
                  {item.how_much_achieved}%
                </ListStyle>
              </ul>
            ))
          : "Nenhuma meta"}
      </GoalsCard>
    </>
  );
};

export default GroupGoals;
