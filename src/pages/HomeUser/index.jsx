import Menu from "../../components/Header";
import Footer from "../../components/Footer";
import {
  MainContainer,
  LimitContainer,
  UserContainer,
  Avatar,
  LastContainer,
  DivGroup,
  BioCardContainer,
  DivHabits,
  HabitsCardContainer,
  Traveler,
  Community,
  CalendarCardContainer,
  GroupInfo,
} from "./styles";

import Imagem from "../../images/Undraw/user.svg";
import CommunityImg from "../../images/Undraw/community.svg";
import TravelerImg from "../../images/Undraw/Traveler.svg";
import { Redirect } from "react-router-dom";

import { useHistory, useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import api from "../../services/api";

import { useSelector } from "react-redux";

import { useHistory, useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import api from "../../services/api";

import { useSelector } from "react-redux";

const HomeUser = () => {
  const { id } = useParams();
  const history = useHistory();
  // TODO Criar integração com: CARDS // HEADER // FOOTER
  // TODO DEIXAR MOBILE FIRST
  const { token, user_id } = useSelector((state) => state.users);
  const [loaded, setLoaded] = useState(false);

  const [habits, setHabits] = useState([]);
  const [user, setUser] = useState([]);
  const [group, setGroup] = useState([]);

  const getDataHomeUser = async () => {
    await api
      .get("habits/personal/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setHabits(res.data));
    await api.get(`users/${id}/`).then((res) => setUser(res.data));
    await api.get(`groups/${user.group}/`).then((res) => setGroup(res.data));

    setLoaded(true);
  };

  useEffect(() => {
    !loaded && getDataHomeUser();
  });

  return (
    <MainContainer>
      {!user_id && <Redirect to={`/Login`} />}
      <Menu />
      <LimitContainer>
        <UserContainer>
          <Avatar src={Imagem} alt="User" />
          <h1>{user.username}</h1>
        </UserContainer>

        <GroupInfo>
          <h2 onClick={() => history.push(`/Group/${group.id}/`)}>
            {loaded && group.name ? group.name : "Sem grupo"}
          </h2>
          <h3>{loaded && group.category}</h3>
        </GroupInfo>
        <DivGroup>
          <BioCardContainer>
            <h1>Card BIO</h1>
            <div>Descrição: {group.description}</div>
          </BioCardContainer>
          <Community src={CommunityImg} alt="Community" />
          <CalendarCardContainer>
            <h1>Calendar</h1>
            {loaded &&
              group.activities.map((item) => (
                <div key={item.id}>
                  <div>Título: {item.title} </div>
                  <div>Data: {item.realization_time}</div>
                </div>
              ))}
          </CalendarCardContainer>
        </DivGroup>

        <LastContainer>
          {loaded &&
            user_id === id &&
            habits.map((item, index) => (
              <div key={index}>
                <h1>Hábito</h1>
                <DivHabits>
                  <HabitsCardContainer>
                    <h2>{item.title}</h2>
                    <div>Categoria: {item.category}</div>
                    <div>Dificuldade: {item.difficulty}</div>
                    <div>Frequência: {item.frequency}</div>
                    <div>Quanto foi alcançado: {item.how_much_achieved}%</div>
                  </HabitsCardContainer>
                  <Traveler src={TravelerImg} />
                </DivHabits>
              </div>
            ))}
        </LastContainer>
      </LimitContainer>
      <Footer />
    </MainContainer>
  );
};

export default HomeUser;
