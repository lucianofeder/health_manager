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
  button {
    background-color: #0000;
    height: 100%;
    border: none;
    outline: none;
    cursor: pointer;
    &:hover {
      background-color: #0008;
    }
  }
  a {
    cursor: pointer;
    color: white;
    text-decoration: none;
  }

  img {
    width: 120px;
    margin: 10px;
    cursor: pointer;
  }

  .user {
    display: flex;
    height: 60px;

    align-items: center;

    img {
      width: 40px;
    }

    .menor {
      width: 30px;
      height: 30px;
    }
  }
  #logo {
    width: 120px;
    height: 43.5px;
  }

  .nav {
    width: 100%;

    background-color: ${Colors.BasePurple};
    transition: 0.4;
    /* margin: -10px 0 0 0; */

    nav {
      margin: 0;
      width: 100%;
    }
    p {
      margin: 0;
      padding: 5px 10px;
    }

    ul {
      display: flex;
      flex-direction: column;
      list-style: none;
      margin: 0;
      justify-content: start;
      padding: 0;
      li {
        text-align: left;
        margin: 0;
        color: ${Colors.TextColorWhite};
        &:hover {
          background-color: #0008;
        }
      }
    }
  }

  @media (min-width: 600px) {
    .containerUser,
    .nav {
      width: 80%;
      max-width: 1700px;
      margin: 0 auto;
    }
  }
`;
