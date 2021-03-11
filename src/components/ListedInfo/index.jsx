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

const ListedInfo = (props) => {
  const mock = ["atividade1", "atividade2", "atividade3", "atividade4"];
  const { type } = props;
  return (
    <ListedCard>
      {type === "group" ? (
        <>
          <Img src={group} />
          <MainText>Teste</MainText>
          <ExtraTextArea>
            {mock.map((activity) => (
              <ExtraText>{activity}</ExtraText>
            ))}
          </ExtraTextArea>
        </>
      ) : (
        <>
          <ImgUser src={user} />
          <MainText>Teste</MainText>
          <ExtraTextArea>
            {mock.map((activity) => (
              <ExtraText>{activity}</ExtraText>
            ))}
          </ExtraTextArea>
        </>
      )}
    </ListedCard>
  );
};

export default ListedInfo;
