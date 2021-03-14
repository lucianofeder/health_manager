import {
  ListedCard,
  Img,
  MainText,
  ExtraText,
  ExtraTextArea,
  ImgUser,
  ExtraMainText,
} from "./styles";
import group from "../../images/group.svg";
import user from "../../images/Undraw/user.svg";

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
          <Img src={group} onClick={() => history.push(`/Group/${info.id}`)} />
          <ExtraMainText>
            <MainText onClick={() => history.push(`/Group/${info.id}`)}>
              {info.name}
            </MainText>
          </ExtraMainText>
          <ExtraTextArea>{info.category}</ExtraTextArea>
          <ExtraTextArea>{info.description}</ExtraTextArea>
        </>
      ) : (
        <>
          <ImgUser
            src={user}
            onClick={() => history.push(`/HomeUser/${info.id}`)}
          />
          <ExtraMainText>
            <MainText onClick={() => history.push(`/HomeUser/${info.id}`)}>
              {info.username}
            </MainText>
          </ExtraMainText>
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
