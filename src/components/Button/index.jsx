import { ButtonStyle } from "./style";

const Button = (name, action) => {
  return <ButtonStyle onClick={action}>{name}</ButtonStyle>;
};

export default Button;
