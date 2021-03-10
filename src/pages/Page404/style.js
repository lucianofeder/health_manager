import styled from "styled-components";
import Colors from "../../global/Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 650px;
  background: ${Colors.BackgroundLinear};
  font-family: Montserrat;
  font-size: 30px;
  font-style: normal;
  font-weight: lighter;
  color: ${Colors.BasePurple};
  overflow-x: hidden;

  @media (min-width: 700px) {
    font-size: 40px;
    overflow-y: hidden;
  }

  @media (min-width: 1020px) {
    font-size: 45px;
    overflow-y: hidden;
  }
`;

export const LogoStyled = styled.img`
  width: ${(props) =>
    props.small
      ? "200px"
      : props.medium
      ? "300px"
      : props.fullWidth
      ? "100%"
      : ""};

  @media (min-width: 700px) {
    width: ${(props) =>
      props.small
        ? "220px"
        : props.medium
        ? "380px"
        : props.fullWidth
        ? "100%"
        : ""};
  }

  @media (min-width: 1020px) {
    width: ${(props) =>
      props.small
        ? "260px"
        : props.medium
        ? "440px"
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

  @media (min-width: 700px) {
    &:nth-child(1) {
      justify-content: flex-start;
      padding-left: 1em;
    }

    padding: 0.2em;
  }
`;
