import ModalForm from "../../components/ModalForm";
import {
  ImgStyled,
  ListStyle,
  CardContainer,
  DivStyledIcons,
  DivStyledItems,
  DivStyled,
} from "./style";

import add from "../../images/add.svg";
import pen from "../../images/pen.svg";
import close from "../../images/Icons/close.png";
import goalsModal from "../../images/Icons/goalsModal.svg";
import editGoalsModal from "../../images/Icons/editGoalsModal.svg";

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
  console.log(group);

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

  const inputEditGoals = [
    ["title", "EDITE SUA META"],
    ["difficulty", "EDITE A DIFICULDADE"],
  ];

  const handleCreateGoals = (data) => {
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

    setLoaded(false);
  };

  const handleUpdateGoals = (data, idGoal) => {
    group.goals.map((item) => {
      if (item.id === idGoal) {
        api
          .patch(`goals/${idGoal}/`, data, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then(() => setGroup({ ...group, goals: [group.goals, data] }));
      }
    });
    setLoaded(false);
  };

  const handleDeleteGoals = (idGoal) => {
    group.goals.map((item) => {
      if (item.id === idGoal) {
        api
          .delete(`goals/${idGoal}/`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then(() => setGroup({ ...group, goals: [group.goals] }));
      }
    });
    setLoaded(false);
  };

  useEffect(() => {
    !loaded && getDataPageGroup();
  }, [group]);

  return (
    <>
      <CardContainer>
        <h2>Goals</h2>

        {loaded && group.goals
          ? group.goals.map((item) => (
              <ListStyle key={item.id}>
                <DivStyledItems>
                  <DivStyled>{item.title}</DivStyled>
                  <DivStyled>{item.difficulty}</DivStyled>
                  <DivStyled>{item.how_much_achieved}%</DivStyled>
                </DivStyledItems>
                <DivStyledIcons>
                  <ModalForm
                    isButton={false}
                    ImgSrc={pen}
                    icon={editGoalsModal}
                    iconWidth="300px"
                    title="Edit Goals"
                    inputName={inputEditGoals}
                    buttonName="Editar"
                    formAction={handleSubmit((data) =>
                      handleUpdateGoals(data, item.id)
                    )}
                    reference={register}
                    errors={errors}
                  />
                  <ImgStyled
                    onClick={() => handleDeleteGoals(item.id)}
                    src={close}
                  />
                </DivStyledIcons>
              </ListStyle>
            ))
          : "Nenhuma meta"}
        <ModalForm
          isButton={false}
          ImgSrc={add}
          icon={goalsModal}
          iconWidth="300px"
          title="Create Goals"
          inputName={inputName}
          buttonName="Enviar"
          formAction={handleSubmit(handleCreateGoals)}
          reference={register}
          errors={errors}
        />
      </CardContainer>
    </>
  );
};

export default GroupGoals;
