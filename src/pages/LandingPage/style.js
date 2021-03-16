import styled from "styled-components";
import Colors from "../../global/Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  min-height: 680px;

  background: ${Colors.BackgroundLinear};
  font-family: Montserrat;
  font-size: 30px;
  font-style: normal;
  font-weight: lighter;
  color: ${Colors.BasePurple};
  overflow-x: hidden;
  overflow-y: hidden;

  /* Tablet */
  @media (min-width: 700px) {
    font-size: 35px;
    min-height: 635px;
  }

  /* Desktop */
  @media (min-width: 1135px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    font-size: 45px;

    &:nth-child(3) {
      order: 2;
    }
  }

  /* 4K */
  @media (min-width: 1920px) {
    font-size: 55px;
    max-height: 1080;
  }
`;

export const Div = styled.div`
  order: ${(props) => props.order};
  width: 90vw;

  padding: ${(props) =>
    props.small
      ? "1em 0 1em 0"
      : props.medium
      ? "1.5em 0 1em 0"
      : props.large
      ? "0"
      : "0.5em"};

  max-height: ${(props) =>
    props.small
      ? "70px"
      : props.medium
      ? "120px"
      : props.large
      ? "220px"
      : "50px"};

  min-height: ${(props) =>
    props.small
      ? "40px"
      : props.medium
      ? "100px"
      : props.large
      ? "220px"
      : "40px"};

  @media (min-width: 700px) {
    padding: 0.3em;

    min-height: ${(props) =>
      props.small
        ? "40px"
        : props.medium
        ? "100px"
        : props.large
        ? "620px"
        : "40px"};
  }

  @media (min-width: 1135px) {
    padding: 0.5em;

    width: ${(props) =>
      props.small
        ? "600px"
        : props.medium
        ? "600px"
        : props.large
        ? "650px"
        : "450px"};

    min-height: ${(props) =>
      props.small
        ? "40px"
        : props.medium
        ? "100px"
        : props.large
        ? "420px"
        : "40px"};
  }
`;

export const DivStyled = styled.div`
  order: ${(props) => props.order};
  padding: 0.2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 40vh;
  }

  @media (min-width: 1135px) {
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    order: ${(props) => props.internalOrder};
  }
`;

export const DivAjust = styled.div`
  display: flex;
  flex-direction: column;
  width: 98vw;
  padding-top: 1em;
  height: 58vh;
  align-items: center;

  @media (min-width: 1135px) {
    flex-direction: row;
    justify-content: space-around;

    &:nth-child(2) {
      order: 1;
    }
  }
`;

export const DivButton = styled(Div)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 300px;

  @media (min-width: 700px) {
    width: 500px;
  }
  @media (min-width: 1135px) {
    padding: 0.5em 0 0.5em 0;
  }
`;

export const LogoStyled = styled.img`
  order: ${(props) => props.order};
  width: ${(props) =>
    props.small
      ? "200px"
      : props.medium
      ? "280px"
      : props.fullWidth
      ? "100%"
      : ""};

  @media (min-width: 1135px) {
    width: ${(props) =>
      props.small
        ? "200px"
        : props.medium
        ? "400px"
        : props.fullWidth
        ? "100%"
        : "600px"};
  }
`;
