import { CardContainer } from "./style";
import Edit from "../../images/pen.svg";

const Card = (props) => {
  const { children, add, title } = props;
  return (
    <CardContainer>
      <div className="iconModal">
        {add && <h1>+</h1>}
        <img src={Edit} alt="edit" />
      </div>

      <div>
        <h1>{title}</h1>
        {children}
      </div>
    </CardContainer>
  );
};

export default Card;
