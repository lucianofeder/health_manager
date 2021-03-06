import styled from "styled-components";
import Colors from "../../global/Colors";

export const CardContainer = styled.div`
  width: 310px;
  min-height: 100px;
  padding: 30px 10px 30px 10px;
  background-color: ${Colors.BasePurple};
  border: solid 3px ${Colors.BaseLightBlue};
  border-radius: 15px;
  color: ${Colors.TextColorWhite};
  text-align: center;
  position: relative;

  h1 {
    margin: 0;
    font-size: 25px;
    font-weight: normal;
    margin-bottom: 10px;
  }

  p {
    width: 80%;
    margin: 10px auto;
  }

  .iconModal {
    position: absolute;
    right: 5px;
    top: 5px;
    display: flex;

    h1 {
      color: ${Colors.BaseGreen};
      font-size: 30px;
      margin: 0 5px;
    }

    img {
      margin: 0;
      width: 25px;
      border: none;
    }
  }

  .goal {
    span {
      color: ${Colors.BaseGreen};
    }
  }
`;
