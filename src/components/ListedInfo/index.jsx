import {
  ListedCard,
  Img,
  MainText,
  ExtraText,
  ExtraTextArea,
  ImgUser,
} from "./styles";
import group from "../../images/group.svg";
import user from "../../images/user.svg";

import api from "../../services/api";
import { useState } from "react";

const ListedInfo = ({ info, type }) => {
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
          <ImgUser src={user} />
          <MainText>{info.username}</MainText>
          <ExtraTextArea>
            {info.group ? (
              <ExtraText>{fetchGroupName(info.group) && groupName}</ExtraText>
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
