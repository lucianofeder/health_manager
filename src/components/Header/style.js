import styled from "styled-components";
import Colors from "../../global/Colors";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  max-width: 1733px;
  background-color: ${Colors.BasePurple};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 50px auto;

  .containerUser {
    margin: 0;
    display: flex;
    justify-content: space-between;
  }

  img {
    width: 120px;
    margin: 10px;
  }

  .user {
    display: flex;
    align-items: center;

    img {
      width: 40px;
    }

    .menor {
      width: 30px;
      height: 30px;
    }
  }

  .nav {
    width: 100%;
    height: 50px;
    background-color: ${Colors.BasePurple};
    transition: 0.4;
    margin: -10px 0 0 0;

    nav {
      width: 90%;
      margin: 0px auto;
    }

    ul {
      float: right;
      list-style: none;
      margin: 0;
      display: flex;
      li {
        margin: 5px 8px;
        color: ${Colors.TextColorWhite};
      }
    }
  }

  @media (min-width: 600px) {
    .containerUser,
    .nav nav {
      width: 80%;
      max-width: 1700px;
      margin: 0 auto;
    }
  }
`;
