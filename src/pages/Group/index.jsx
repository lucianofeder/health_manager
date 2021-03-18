import HeaderComponent from "../../components/Header";
import Footer from "../../components/Footer";
import CardUsersGroup from "../../components/CardUsersGroup";
import GroupGoals from "../../components/GroupGoals";
import LoadingProgress from "../../components/LoadingProgress";
import GroupActivities from "../../components/GroupActivities";

import ImageGroup from "../../images/group.svg";
import {
  MainContainer,
  LimitContainer,
  ImageGroupStyles,
  NameGroupContainer,
  GroupDescriptionContainer,
  InfoContainer,
} from "./styles";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../services/api";
import GroupDescription from "../../components/GroupDescription";
import GroupName from "../../components/GroupName";
const Group = () => {
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);

  const getDataPageGroup = async () => {
    await api.get(`groups/${id}/`);
    setTimeout(() => setLoaded(true), 100);
  };

  useEffect(() => {
    !loaded && getDataPageGroup();
  });
  return !loaded ? (
    <LoadingProgress />
  ) : (
    <MainContainer>
      <LimitContainer>
        <HeaderComponent />
        <ImageGroupStyles src={ImageGroup} alt="Group Image" />
        <NameGroupContainer>
          <GroupName />
        </NameGroupContainer>
        <GroupDescriptionContainer>
          <InfoContainer>
            <GroupDescription />
            <GroupActivities />
            <GroupGoals />
          </InfoContainer>
          <CardUsersGroup />
        </GroupDescriptionContainer>
        <Footer />
      </LimitContainer>
    </MainContainer>
  );
};
export default Group;
