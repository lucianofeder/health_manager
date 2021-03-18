import styled from "styled-components";
import Colors from "../../global/Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  min-height: 600px;

  background: ${Colors.BackgroundLinear};
  font-family: Montserrat;
  font-size: 30px;
  font-style: normal;
  font-weight: lighter;
  color: ${Colors.BasePurple};
  overflow-x: hidden;
  overflow-y: hidden;

  /* Desktop */
  @media (min-width: 1020px) {
    font-size: 40px;
  }

  /* 4K */
  @media (min-width: 1920px) {
    font-size: 55px;
    max-height: 1080;
  }
`;

export const LogoStyled = styled.img`
  width: ${(props) =>
    props.small ? "200px" : props.medium ? "0" : props.fullWidth ? "100%" : ""};

  /* Tablet */
  @media (min-width: 800px) {
    margin-top: ${(props) => (props.fullWidth ? "-180px" : "")};
    width: ${(props) =>
      props.small
        ? "220px"
        : props.medium
        ? "430px"
        : props.fullWidth
        ? "100%"
        : ""};
  }

  /* Desktop */
  @media (min-width: 1020px) {
    width: ${(props) =>
      props.small
        ? "240px"
        : props.medium
        ? "430px"
        : props.fullWidth
        ? "100%"
        : ""};
  }

  /* 4K */
  @media (min-width: 1920px) {
    width: ${(props) =>
      props.small
        ? "360px"
        : props.medium
        ? "740px"
        : props.fullWidth
        ? "100%"
        : ""};
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;

  padding: ${(props) => (props.nullPadding ? "" : "0.5em")};
  width: 99vw;
  margin: 0;

  /* Tablet */
  @media (min-width: 800px) {
    &:nth-child(1) {
      justify-content: flex-start;
      padding-left: 1.5em;
    }
  }

  /* Desktop */
  @media (min-width: 1020px) {
    padding: 0.2em;
  }

  /* 4K */
  @media (min-width: 1920px) {
    padding: 0.5em 0 0.5em 0;
  }
`;
