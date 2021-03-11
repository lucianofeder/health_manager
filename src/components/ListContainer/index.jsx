import { Container, Header, Title } from "./style";
import ListedInfo from "../ListedInfo";
import Button from "../Button/";

const ListContainer = ({ list, type }) => {
  const mock = ["Grupo1", "Grupo2", "Grupo3", "Grupo4"];
  return (
    <Container>
      {type === "group" && (
        <Header>
          <Title>Groups</Title>
          <Button name="New Group" action={() => console.log("oi")} />
        </Header>
      )}
      {mock.map((info) => (
        <ListedInfo type={type} />
      ))}
    </Container>
  );
};

export default ListContainer;
