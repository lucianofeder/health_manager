import { InputArea, InputStyled, Placeholder } from "./styles";
import { useState } from "react";

const Input = (props) => {
  const [hasValue, setHasValue] = useState(false);

  const handleInput = (evt) => {
    const input = evt.target.value;
    if (input.length > 0) {
      setHasValue(true);
    } else {
      setHasValue(false);
    }
  };

  const { placeholder, name } = props;
  return (
    <InputArea>
      {!hasValue && <Placeholder>{placeholder}</Placeholder>}
      <InputStyled name={name} onChange={handleInput} />
    </InputArea>
  );
};

export default Input;
