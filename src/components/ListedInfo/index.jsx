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
import Avatar from "../../images/Undraw/user.svg";

import api from "../../services/api";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const ListedInfo = ({ info, type }) => {
  const history = useHistory();
  const [groupName, setGroupName] = useState("");
  const fetchGroupName = async (id) => {
    await api.get(`groups/${id}/`).then((res) => setGroupName(res.data.name));
  };

  useEffect(() => {
    if (groupName.length === 0 && info.group) {
      fetchGroupName(info.group);
    }
  });

  const capitalize = (text) => {
    return text
      .trim()
      .split(" ")
      .map((word) => word[0]?.toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <ListedCard>
      {type === "group" ? (
        <>
          <Img src={group} onClick={() => history.push(`/Group/${info.id}`)} />
          <ExtraMainText>
            <MainText onClick={() => history.push(`/Group/${info.id}`)}>
              {capitalize(info.name)}
            </MainText>
          </ExtraMainText>
          <ExtraTextArea>
            {info.category && capitalize(info.category)}
          </ExtraTextArea>
          <ExtraTextArea>{info.description}</ExtraTextArea>
        </>
      ) : (
        <>
          <ImgUser
            src={Avatar}
            onClick={() => history.push(`/HomeUser/${info.id}`)}
          />
          <ExtraMainText>
            <MainText onClick={() => history.push(`/HomeUser/${info.id}`)}>
              {capitalize(info.username)}
            </MainText>
          </ExtraMainText>
          <ExtraTextArea>
            {info.group ? (
              <ExtraText onClick={() => history.push(`/Group/${info.group}`)}>
                {groupName && capitalize(groupName)}
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
