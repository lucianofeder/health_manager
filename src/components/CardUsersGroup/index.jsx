/* eslint-disable react-hooks/exhaustive-deps */
import CardUsersGroupStyled from "./style";
import userIcon from "../../images/Undraw/user.svg";
import GroupSubscribe from "../GroupSubscribe";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";

/*
todo Props necessaria = users

?essa prop é um array de objeto :

*users - Format: variavel --- lista de usuários do grupo que vem da API {{baseURL}}/groups/1/

*to use -users = [{ username: "gustavo" }, { username: "Caio" } 

*/

const CardUsersGroup = ({ users }) => {
  const { id } = useParams();
  const [group, setGroup] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getDataPageGroup = async () => {
    await api
      .get(`groups/${id}/`)
      .then((res) => setGroup(res.data))
      .catch((res) => console.log(res));
    setLoaded(true);
  };
  useEffect(() => {
    !loaded && getDataPageGroup();
  }, []);

  return (
    <CardUsersGroupStyled>
      <GroupSubscribe
        group={group}
        setLoaded={setLoaded}
        getDataPageGroup={getDataPageGroup}
      />
      <h2>Participating Users</h2>
      <div id="containerUsers">
        {group.users?.map((user, index) => (
          <div id="containerInfos" key={index}>
            <img src={userIcon} alt="User Icon" />
            <Link to={`/HomeUser/${user.id}`}>{user.username}</Link>
          </div>
        ))}
        <span>{users?.length}</span>
      </div>
    </CardUsersGroupStyled>
  );
};

export default CardUsersGroup;
