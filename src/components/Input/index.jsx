import { InputArea, InputStyled, Placeholder } from "./styles";
import { useState } from "react";

const Input = ({ placeholder, name, reference, error }) => {
  const [hasValue, setHasValue] = useState(false);

  const handleInput = (evt) => {
    const input = evt.target.value;
    if (input.length > 0) {
      setHasValue(true);
    } else {
      setHasValue(false);
    }
  };

  return (
    <InputArea error={error ? true : false}>
      {!hasValue && <Placeholder>{placeholder}</Placeholder>}
      {error && <span>{error}</span>}
      <InputStyled name={name} onChange={handleInput} ref={reference} />
    </InputArea>
  );
};

export default Input;
