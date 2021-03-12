import {
  ListedCard,
  Img,
  MainText,
  ExtraText,
  ExtraTextArea,
  ImgUser,
} from "./styles";
import group from "../../images/group.svg";
import Avatar from "../../images/Undraw/user.svg";

import api from "../../services/api";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const ListedInfo = ({ info, type }) => {
  const history = useHistory();
  const [groupName, setGroupName] = useState("");
  const fetchGroupName = async (id) => {
    await api.get(`groups/${id}/`).then((res) => setGroupName(res.data.name));
  };

  return (
    <ListedCard>
      {type === "group" ? (
        <>
          <Img src={group} />
          <MainText>Teste</MainText>
          <ExtraTextArea>
            {info.map((activity, index) => (
              <ExtraText key={index}>{activity}</ExtraText>
            ))}
          </ExtraTextArea>
        </>
      ) : (
        <>
          <ImgUser
            src={Avatar}
            onClick={() => history.push(`/HomeUser/${info.id}`)}
          />
          <MainText onClick={() => history.push(`/HomeUser/${info.id}`)}>
            {info.username}
          </MainText>
          <ExtraTextArea>
            {info.group ? (
              <ExtraText onClick={() => history.push(`/Group/${info.group}`)}>
                {fetchGroupName(info.group) && groupName}
              </ExtraText>
            ) : (
              <ExtraText>Sem grupo</ExtraText>
            )}
          </ExtraTextArea>
        </>
      )}
    </ListedCard>
  );
};

export default ListedInfo;
