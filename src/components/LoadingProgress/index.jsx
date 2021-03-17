import heart1 from "../../images/LoadingProgress/heart1.png";
import heart2 from "../../images/LoadingProgress/heart2.png";
import heart3 from "../../images/LoadingProgress/heart3.png";
import heart4 from "../../images/LoadingProgress/heart4.png";
import title from "../../images/title.svg";
import { Container, ContainerImg, FullScreen } from "./style";

const LoadingProgress = () => {
  return (
    <FullScreen>
      <Container>
        <ContainerImg>
          <img id="i1" src={heart1} alt="heart" />
          <img id="i2" src={heart2} alt="heart" />
          <img id="i3" src={heart4} alt="heart" />
          <img id="i4" src={heart3} alt="heart" />
        </ContainerImg>

        <img src={title} alt="Habitus" />
      </Container>
    </FullScreen>
  );
};

export default LoadingProgress;
