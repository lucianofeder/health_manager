import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import LoadingProgress from "../../components/LoadingProgress";

import {
  MainContainer,
  LimitContainer,
  UserContainer,
  Avatar,
  DivGroup,
  Community,
  GroupInfo,
  DivHabitsCard,
} from "./styles";

import Calendar from "../../images/Icons/calendar.png";
import Imagem from "../../images/Undraw/user.svg";
import CommunityImg from "../../images/Undraw/community.svg";
import { Redirect } from "react-router-dom";

import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../services/api";

import { useSelector } from "react-redux";

import CardHabit from "../../components/CardHabit";

const HomeUser = () => {
  const { id } = useParams();

  const history = useHistory();

  const { token, user_id } = useSelector((state) => state.users);

  const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState([]);
  const [group, setGroup] = useState([]);

  const getDataHomeUser = async () => {
    await api.get("habits/personal/", {
      headers: { Authorization: `Bearer ${token}` },
    });
    await api.get(`users/${id}/`).then((res) => setUser(res.data));

    user.group !== null &&
      (await api
        .get(`groups/${user.group}/`)
        .then((res) => setGroup(res.data)));

    setLoaded(true);
  };

  useEffect(() => {
    !loaded && getDataHomeUser();
  });

  return !loaded ? (
    <LoadingProgress />
  ) : (
    <MainContainer>
      {!user_id && <Redirect to={`/Login`} />}
      <Header setLoaded={setLoaded} />
      <LimitContainer>
        <UserContainer>
          <Avatar src={Imagem} alt="User" />
          <h1>{user.username}</h1>
        </UserContainer>

        <GroupInfo>
          {loaded && group.name && (
            <h2 onClick={() => history.push(`/Group/${group.id}/`)}>
              {group.name}
            </h2>
          )}
          <h3>{loaded && group.category}</h3>
        </GroupInfo>
        <DivGroup>
          <Card title="Description">
            <DivHabitsCard>
              {loaded && !group ? <p>No Discription</p> : group.description}
            </DivHabitsCard>
          </Card>
          <Community src={CommunityImg} alt="Community" />
          <Card title="Calendar">
            <img
              className="calendarIcon"
              id="icon"
              src={Calendar}
              alt="Calendar Icon"
            />

            {loaded && !group ? (
              <p>No Activides</p>
            ) : (
              group.activities.map((item) => (
                <DivHabitsCard key={item.id}>
                  <div>Título: {item.title} </div>
                  <div>
                    Data:{" "}
                    {new Date(item.realization_time).toUTCString().slice(0, -7)}
                  </div>
                  <hr></hr>
                </DivHabitsCard>
              ))
            )}
          </Card>
        </DivGroup>
        <CardHabit />
      </LimitContainer>
      <Footer />
    </MainContainer>
  );
};

export default HomeUser;
