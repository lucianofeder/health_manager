import { Container, Header, Title } from "./style";
import ListedInfo from "../ListedInfo";
import Button from "../Button/";

const ListContainer = ({ list, type }) => {
  return (
    <Container>
      {type === "group" && (
        <Header>
          <Title>Groups</Title>
          <Button name="New Group" action={() => console.log("oi")} />
        </Header>
      )}
      {list.map((info, index) => (
        <ListedInfo type={type} info={info} key={index} />
      ))}
    </Container>
  );
};

export default ListContainer;
