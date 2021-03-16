import { InputArea, SelectStyled, Placeholder } from "./styles";
import { useState } from "react";

const InputSelector = ({ placeholder, name, reference, error }) => {
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
      <SelectStyled
        typeof=""
        name={name}
        onChange={handleInput}
        ref={reference}
      >
        <option disabled selected value></option>
        <option value="Hard">Hard</option>
        <option value="Medium">Medium</option>
        <option value="Easy">Easy</option>
      </SelectStyled>
    </InputArea>
  );
};

export default InputSelector;
