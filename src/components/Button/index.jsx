import { ButtonStyle } from "./style";

const Button = ({ children, action }) => {
  return <ButtonStyle onClick={action}>{children}</ButtonStyle>;
};

export default Button;
