/* eslint-disable array-callback-return */
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import api from "../../services/api";

import close from "../../images/Icons/close.png";
import edit from "../../images/Icons/edit.svg";
import add from "../../images/Icons/addSTD2.svg";
import ActivityModal from "../../images/Icons/activityModal.svg";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import {
  ListStyle,
  ActivitiesCard,
  Hr,
  Ul,
  Subtitle,
  ButtonsContainer,
  MainContainer,
  AddButtonDiv,
  ActivitiesCardSecond,
  ImgStyled,
} from "./styles";

import ModalForm from "../../components/ModalForm";

const GroupActivities = () => {
  const { token } = useSelector((state) => state.users);
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [group, setGroup] = useState([]);

  const getDataPageGroupActivities = async () => {
    await api.get(`groups/${id}/`).then((res) => setGroup(res.data));
    setLoaded(true);
  };

  const schema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório."),
    realization_time: yup
      .date()
      .required("A escolha da data e hora é obrigatória."),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const inputActivity = [
    ["title", "NOME DA ATIVIDADE"],
    ["realization_time", "", "datetime-local"],
  ];

  const handleFormActivities = async (data) => {
    const newActivity = {
      title: data.title,
      realization_time: data.realization_time.toISOString(),
      group: group.id,
    };
    await api
      .post(`activities/`, newActivity, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() =>
        setGroup({ ...group, activities: [...group.activities, newActivity] })
      )
      .then(() => getDataPageGroupActivities());
  };

  const inputEditActivity = [
    ["title", "EDITE SUA META"],
    ["realization_time", "", "datetime-local"],
  ];

  const handleUpdateActivity = (data, idActivity) => {
    group.activities.map((item) => {
      if (item.id === idActivity) {
        api
          .patch(`activities/${idActivity}/`, data, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then(() =>
            setGroup({ ...group, activities: [group.activities, data] })
          );
      }
    });
    setLoaded(false);
  };

  const handleDeleteActivity = (idActivity) => {
    group.activities.map((item) => {
      if (item.id === idActivity) {
        api
          .delete(`activities/${idActivity}/`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then(() => setGroup({ ...group, activities: [group.activities] }));
      }
    });
    setLoaded(false);
  };

  useEffect(() => {
    !loaded && getDataPageGroupActivities();
  });

  return (
    <>
      <ActivitiesCard className="container">
        <Subtitle>Activities</Subtitle>
        {loaded && group.activities
          ? group.activities.map((item) => (
              <MainContainer key={item.id}>
                <Ul>
                  <ListStyle>{item.title}</ListStyle>
                  <ListStyle>
                    {new Date(item.realization_time).toUTCString().slice(0, -7)}
                  </ListStyle>
                  <Hr />
                </Ul>
                <ButtonsContainer>
                  <ModalForm
                    isButton={false}
                    ImgSrc={edit}
                    icon={ActivityModal}
                    iconWidth="300px"
                    title="Create Activity"
                    inputName={inputActivity}
                    buttonName="Enviar"
                    formAction={handleSubmit((data) =>
                      handleUpdateActivity(data, item.id)
                    )}
                    reference={register}
                    errors={errors}
                  />
                  <ImgStyled
                    onClick={() => {
                      console.log(item.id);
                      handleDeleteActivity(item.id);
                    }}
                    src={close}
                  />
                </ButtonsContainer>
              </MainContainer>
            ))
          : "carregando..."}
      </ActivitiesCard>
      <ActivitiesCardSecond>
        <AddButtonDiv>
          <ModalForm
            isButton={false}
            ImgSrc={add}
            icon={ActivityModal}
            iconWidth="300px"
            title="Create Activity"
            inputName={inputEditActivity}
            buttonName="Enviar"
            formAction={handleSubmit(handleFormActivities)}
            reference={register}
            errors={errors}
          />
        </AddButtonDiv>
      </ActivitiesCardSecond>
    </>
  );
};
export default GroupActivities;
