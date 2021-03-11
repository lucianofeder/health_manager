import Menu from "../../components/Header";
import Footer from "../../components/Footer";
import {
  MainContainer,
  LimitContainer,
  UserContainer,
  Avatar,
  LastContainer,
  DivGroup,
  BioCardContainer,
  DivHabits,
  HabitsCardContainer,
  Traveler,
  Community,
  CalendarCardContainer,
} from "./styles";
import Imagem from "../../images/Undraw/user.svg";
import CommunityImg from "../../images/Undraw/community.svg";
import TravelerImg from "../../images/Undraw/Traveler.svg";

const HomeUser = () => {
  // TODO Criar integração com: CARDS // HEADER // FOOTER
  // TODO DEIXAR MOBILE FIRST

  return (
    <MainContainer>
      <Menu />
      <LimitContainer>
        <UserContainer>
          <Avatar src={Imagem} alt="User" />
          <h1>Nome</h1>
        </UserContainer>

        <h1>Nome do Grupo</h1>
        <DivGroup>
          <BioCardContainer>Card BIO</BioCardContainer>
          <Community src={CommunityImg} alt="Community" />
          <CalendarCardContainer>Calendar</CalendarCardContainer>
        </DivGroup>

        <LastContainer>
          <h1>Hábito</h1>
          <DivHabits>
            <HabitsCardContainer>Caixa de Hábitos</HabitsCardContainer>
            <Traveler src={TravelerImg} />
          </DivHabits>
        </LastContainer>
        <Footer />
      </LimitContainer>
    </MainContainer>
  );
};

export default HomeUser;
