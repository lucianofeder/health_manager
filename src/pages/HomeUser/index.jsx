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
  GroupInfo,
  DivHabitsCard,
} from "./styles";

import Calendar from "../../images/Icons/calendar.png";
import Imagem from "../../images/Undraw/user.svg";
import CommunityImg from "../../images/Undraw/community.svg";
import TravelerImg from "../../images/Undraw/Traveler.svg";
import { Redirect } from "react-router-dom";

import { useHistory, useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import api from "../../services/api";

import { useSelector } from "react-redux";
import Card from "../../components/Card";

const HomeUser = () => {
  const { id } = useParams();

  const history = useHistory();

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
          <Card title="Description">
            <DivHabitsCard>Descrição: {group.description}</DivHabitsCard>
          </Card>
          <Community src={CommunityImg} alt="Community" />
          <Card title="Calendar">
            <img
              className="calendarIcon"
              id="icon"
              src={Calendar}
              alt="Calendar Icon"
            />
            {loaded &&
              group.activities.map((item) => (
                <DivHabitsCard key={item.id}>
                  <div>Título: {item.title} </div>
                  <div>
                    Data:{" "}
                    {new Date(item.realization_time).toUTCString().slice(0, -7)}
                  </div>
                  <hr></hr>
                </DivHabitsCard>
              ))}
          </Card>
        </DivGroup>
      </LimitContainer>
      <Footer />
    </MainContainer>
  );
};

export default HomeUser;
