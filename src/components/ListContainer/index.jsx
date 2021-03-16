import {
  Container,
  Header,
  Title,
  RightArrow,
  LeftArrow,
  DivButtons,
} from "./style";
import ListedInfo from "../ListedInfo";
import Button from "../Button/";

const ListContainer = ({
  list,
  type,
  handleNextPage,
  handlePreviousPage,
  actualPage,
  nextPage,
}) => {
  return (
    <Container>
      {type === "group" && (
        <Header>
          <Title>Groups</Title>
          <Button action={() => console.log("oi")}>New Group</Button>
        </Header>
      )}
      <DivButtons>
        {actualPage > 1 && (
          <LeftArrow onClick={handlePreviousPage}>Previous</LeftArrow>
        )}
        {nextPage && <RightArrow onClick={handleNextPage}>Next</RightArrow>}
      </DivButtons>
      {list.map((info, index) => (
        <ListedInfo type={type} info={info} key={index} />
      ))}
    </Container>
  );
};

export default ListContainer;
