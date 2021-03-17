import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

import api from "../../services/api";
import { useEffect } from "react";
import pen from "../../images/pen.svg";
import add from "../../images/add.svg";
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

  const handleFormActivities = (data) => {
    const newActivity = {
      title: data.title,
      realization_time: data.realization_time.toISOString(),
      group: group.id,
    };
    api
      .post(`activities/`, newActivity, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() =>
        setGroup({ ...group, activities: [group.activities, newActivity] })
      );
    // console.log(typeof data.realization_time.toISOString());
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

  useEffect(() => {
    !loaded && getDataPageGroupActivities();
    console.log(group);
  });

  return (
    <ActivitiesCard className="container">
      <Subtitle>{group.name}</Subtitle>

      {loaded && group.activities
        ? group.activities.map((item) => (
            <MainContainer>
              <Ul key={item.id}>
                <ListStyle>{item.title}</ListStyle>

                <ListStyle>
                  {new Date(item.realization_time).toUTCString().slice(0, -7)}
                </ListStyle>
                <Hr />
              </Ul>
              <ButtonsContainer>
                <ModalForm
                  isButton={false}
                  ImgSrc={pen}
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
              </ButtonsContainer>
            </MainContainer>
          ))
        : "Sem Atividades"}
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
    </ActivitiesCard>
  );
};

export default GroupActivities;
