import HeaderComponent from "../../components/Header";
import Footer from "../../components/Footer";
import ImageGroup from "../../images/group.svg";
import {
  MainContainer,
  LimitContainer,
  ImageGroupStyles,
  NameGroupContainer,
  Title,
  Subtitle,
  ListStyle,
  TypeGroup,
  GroupDescriptionContainer,
  InfoContainer,
  UsersContainer,
  DescriptioCard,
  ActivitiesCard,
  GoalsCard,
} from "./styles";

const Group = () => {
  return (
    <MainContainer>
      <LimitContainer>
        <HeaderComponent />
        <ImageGroupStyles src={ImageGroup} alt="Group Image" />
        <NameGroupContainer>
          <Title>Título do Grupo</Title>
          <TypeGroup>Categoria</TypeGroup>
        </NameGroupContainer>

        <GroupDescriptionContainer>
          <InfoContainer>
            <DescriptioCard>
              <Subtitle>Description</Subtitle>
              <p>Content</p>
            </DescriptioCard>
            <ActivitiesCard>
              <Subtitle>Activities</Subtitle>
              <ul>
                <ListStyle>content</ListStyle>
                <ListStyle>content</ListStyle>
              </ul>
            </ActivitiesCard>
            <GoalsCard>
              <Subtitle>Goals</Subtitle>
              <p>content</p>
            </GoalsCard>
          </InfoContainer>

          <UsersContainer>
            <ul>
              <ListStyle>tk</ListStyle>
              <ListStyle>luciano</ListStyle>
              <ListStyle>jardel</ListStyle>
              <ListStyle>gustavo</ListStyle>
              <ListStyle>matheus</ListStyle>
            </ul>
          </UsersContainer>
        </GroupDescriptionContainer>
        <Footer />
      </LimitContainer>
    </MainContainer>
  );
};

export default Group;
