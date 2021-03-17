import {
  Container,
  Header,
  Title,
  RightArrow,
  LeftArrow,
  DivButtons,
} from "./style";
import ListedInfo from "../ListedInfo";

import CreateGroup from "../../components/CreateGroup";

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
          <CreateGroup />
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
