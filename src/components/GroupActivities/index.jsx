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
  Ul,
  Hr,
  Subtitle,
  ButtonsContainer,
} from "../../pages/Group/styles";
import ModalForm from "../../components/ModalForm";

const GroupActivities = () => {
  const { token } = useSelector((state) => state.users);
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [group, setGroup] = useState([]);

  const inputActivity = [
    ["title", "NOME DA ATIVIDADE"],
    ["realization_time", "DATE", "datetime-local"],
  ];

  

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

  const handleUpdateActivity = () => {
    
  }

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
    console.log(typeof data.realization_time.toISOString());
  };

  useEffect(() => {
    !loaded && getDataPageGroupActivities();
  });

  return (
    <ActivitiesCard>
      <Subtitle>{group.name}</Subtitle>

      {loaded && group.activities
        ? group.activities.map((item) => (
            <Ul key={item.id}>
              <ListStyle>{item.title}</ListStyle>

              <ListStyle>
                {new Date(item.realization_time).toUTCString().slice(0, -7)}
              </ListStyle>
              <ButtonsContainer>
                <ModalForm
                  isButton={false}
                  ImgSrc={pen}
                  icon={ActivityModal}
                  iconWidth="300px"
                  title="Create Activity"
                  inputName={inputActivity}
                  buttonName="Enviar"
                  formAction={handleSubmit(handleFormActivities)}
                  reference={register}
                  errors={errors}
                />
              </ButtonsContainer>
              <Hr />
            </Ul>
          ))
        : "Sem Atividades"}
      <ModalForm
        isButton={false}
        ImgSrc={add}
        icon={ActivityModal}
        iconWidth="300px"
        title="Create Activity"
        inputName={inputActivity}
        buttonName="Enviar"
        formAction={handleSubmit(handleFormActivities)}
        reference={register}
        errors={errors}
      />
    </ActivitiesCard>
  );
};

export default GroupActivities;
