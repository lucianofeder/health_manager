import { InputArea, InputStyled, Placeholder } from "./styles";

const Input = (props) => {
  const { placeholder, name } = props;
  return (
    <InputArea>
      <Placeholder>{placeholder}</Placeholder>
      <InputStyled name={name} />
    </InputArea>
  );
};

export default Input;
