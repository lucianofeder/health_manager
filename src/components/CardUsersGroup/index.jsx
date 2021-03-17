import CardUsersGroupStyled from "./style";
import userIcon from "../../images/Undraw/user.svg";
import GroupSubscribe from "../GroupSubscribe";

/*
todo Props necessaria = users

?essa prop é um array de objeto :

*users - Format: variavel --- lista de usuários do grupo que vem da API {{baseURL}}/groups/1/

*to use -users = [{ username: "gustavo" }, { username: "Caio" } 

*/

const CardUsersGroup = ({ users }) => {
  return (
    <CardUsersGroupStyled>
      <GroupSubscribe />
      <h2>Participating Users</h2>
      <div id="containerUsers">
        {users?.map((user, index) => (
          <div id="containerInfos" key={index}>
            <img src={userIcon} alt="User Icon" />
            <p>{user.username}</p>
          </div>
        ))}
        <span>{users?.length}</span>
      </div>
    </CardUsersGroupStyled>
  );
};

export default CardUsersGroup;
