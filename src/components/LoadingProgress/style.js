import styled from "styled-components";

export const ContainerImg = styled.div`
  position: relative;
  width: 200px;

  height: 200px;
  img {
    position: absolute;
    width: 82%;
    height: 82%;
  }
  @keyframes anima {
    50% {
      opacity: 0.5;
    }
  }
  img#i1 {
    top: 0;
    left: 0;

    animation: anima 1000ms infinite;
  }
  img#i2 {
    top: 0;
    right: 0;
    animation: anima 1000ms infinite;
    animation-delay: 250ms;
  }
  img#i3 {
    bottom: 0;
    left: 0;
    animation: anima 1000ms infinite;
    animation-delay: 750ms;
  }
  img#i4 {
    bottom: 0;
    right: 0;
    animation: anima 1000ms infinite;
    animation-delay: 500ms;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
