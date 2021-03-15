import HeaderComponent from "../../components/Header";
import Footer from "../../components/Footer";
import ModalForm from "../../components/ModalForm";

import ImageGroup from "../../images/group.svg";
import pen from "../../images/pen.svg";
import goalsModal from "../../images/Icons/goalsModal.svg";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import {
  MainContainer,
  LimitContainer,
  ImageGroupStyles,
  NameGroupContainer,
  Title,
  Subtitle,
  ListStyle,
  TypeGroup,
  GroupDescriptionContainer,
  InfoContainer,
  UsersContainer,
  DescriptioCard,
  ActivitiesCard,
  GoalsCard,
} from "./styles";

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import api from "../../services/api";

const Group = () => {
  const { token, user_id } = useSelector((state) => state.users);

  const [loaded, setLoaded] = useState(false);

  const [user, setUser] = useState([]);
  const [group, setGroup] = useState([]);
  const [activities, setActivities] = useState([]);
  const [goals, setGoals] = useState([]);
  const [participatingUsers, setParticipatingUsers] = useState([]);

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
    await api.get(`users/${user_id}/`).then((res) => setUser(res.data));

    await api.get(`groups/${user.group}/`).then((res) => setGroup(res.data));

    api
      .get(`groups/${user.group}/`)
      .then((res) => setActivities(res.data.activities));

    api.get(`groups/${user.group}/`).then((res) => setGoals(res.data.goals));

    api
      .get(`groups/${user.group}/`)
      .then((res) => setParticipatingUsers(res.data.users));

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

      // MUDAR ACHIEVED COM BARRA DE STATUS
      how_much_achieved: 70,
    };
    api
      .post(`goals/`, newData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => console.log(res));

    setLoaded(true);
  };

  useEffect(() => {
    !loaded && getDataPageGroup();
  });
  return (
    <MainContainer>
      <LimitContainer>
        <HeaderComponent />
        <ImageGroupStyles src={ImageGroup} alt="Group Image" />
        <NameGroupContainer>
          <Title>{group.name}</Title>
          <TypeGroup>{group.category}</TypeGroup>
        </NameGroupContainer>

        <GroupDescriptionContainer>
          <InfoContainer>
            <DescriptioCard>
              <Subtitle>Description</Subtitle>
              <p>{group.description}</p>
            </DescriptioCard>
            <ActivitiesCard>
              <Subtitle>Activities</Subtitle>
              {activities.map((item) => (
                <ul key={item.id}>
                  <ListStyle>{item.title}</ListStyle>
                  <ListStyle>{item.realization_time}</ListStyle>
                </ul>
              ))}
            </ActivitiesCard>
            <GoalsCard>
              <Subtitle>Goals</Subtitle>

              <ModalForm
                isButton={false}
                ImgSrc={pen}
                icon={goalsModal}
                iconWidth="300px"
                title="Create Goals"
                inputName={inputName}
                buttonName="Enviar"
                formAction={handleSubmit(handleForm)}
                reference={register}
                errors={errors}
              />
              {goals.map((item) => (
                <ul key={item.id}>
                  <ListStyle>
                    {item.title} || {item.difficulty} ||
                    {item.how_much_achieved}%
                  </ListStyle>
                </ul>
              ))}
            </GoalsCard>
          </InfoContainer>

          <GoalsCard>
            <UsersContainer>
              <Subtitle>Usuários Participantes</Subtitle>

              {participatingUsers.map((item) => (
                <ul key={item.id}>
                  <ListStyle>{item.username}</ListStyle>
                </ul>
              ))}
            </UsersContainer>
          </GoalsCard>
        </GroupDescriptionContainer>
        <Footer />
      </LimitContainer>
    </MainContainer>
  );
};

export default Group;
