import HeaderComponent from "../../components/Header";
import Footer from "../../components/Footer";
// import ModalForm from "../../components/ModalForm";
import CardUsersGroup from "../../components/CardUsersGroup";
import Card from "../../components/Card";
import GroupGoals from "../../components/GroupGoals";
import LoadingProgress from "../../components/LoadingProgress";
import GroupActivities from "../../components/GroupActivities";

import ImageGroup from "../../images/group.svg";
// import add from "../../images/add.svg";
// import goalsModal from "../../images/Icons/goalsModal.svg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  MainContainer,
  LimitContainer,
  ImageGroupStyles,
  NameGroupContainer,
  Title,
  // Subtitle,
  ListStyle,
  TypeGroup,
  GroupDescriptionContainer,
  InfoContainer,
  // DescriptioCard,
  // ActivitiesCard,
  // GoalsCard,
  // Ul,
} from "./styles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import api from "../../services/api";
import GroupDescription from "../../components/GroupDescription";
// import { GroupSharp } from "@material-ui/icons";
const Group = () => {
  const { id } = useParams();
  const { token } = useSelector((state) => state.users);
  const [loaded, setLoaded] = useState(false);
  // const [user, setUser] = useState([]);
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
    // await api.get(`users/${user_id}/`).then((res) => setUser(res.data));
    await api.get(`groups/${id}/`).then((res) => setGroup(res.data));
    setTimeout(() => setLoaded(true), 500);
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
  return !loaded ? (
    <LoadingProgress />
  ) : (
    <MainContainer>
      <LimitContainer>
        <HeaderComponent />
        <ImageGroupStyles src={ImageGroup} alt="Group Image" />
        <NameGroupContainer>
          <Title>{loaded && group.name}</Title>
          <TypeGroup>{loaded && group.category}</TypeGroup>
        </NameGroupContainer>
        <GroupDescriptionContainer>
          <InfoContainer>
            {/* CARD NOVO !!! */}
            <GroupDescription />
            <GroupActivities />

            {/* CARD NOVO !!! */}
            <GroupGoals />

            {/* <Card title="Goals"> */}
            {/* CRIAR RENDERIZAÇÃO CONDICIONAL PARA QUANDO O USUARIO ACESSAR O 
              PERFIL DE OUTRO USUARIO NÃO PODER ADICIONAR GOALS NO OUTRO PERFIL */}

            {/* <ModalForm
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
            </Card> */}
          </InfoContainer>
          {loaded && <CardUsersGroup users={group.users} />}
        </GroupDescriptionContainer>
        <Footer />
      </LimitContainer>
    </MainContainer>
  );
};
export default Group;
