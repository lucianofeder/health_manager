import styled from "styled-components";
import Colors from "../../global/Colors";

export const MainContainer = styled.section`
  width: 100%;
  height: 100%;
  background: ${Colors.BackgroundLinear};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  #logo {
    width: 250px;
    margin: 10px;
    cursor: pointer;
    float: left;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    #image {
      display: none;
      margin: 0;
    }

    section {
      margin: 0;
    }
  }

  #cloud {
    width: 100%;
  }

  @media (min-width: 900px) {
    align-items: normal;

    div #image {
      width: 450px;
      display: block;
    }
  }

  .adjust {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
  }
`;

export const Leged = styled.p`
  font-size: 18px;
  margin: 0 auto;
  position: absolute;
  bottom: 0px;

  a {
    text-decoration: none;
    color: ${Colors.BasePurple};
  }
`;
