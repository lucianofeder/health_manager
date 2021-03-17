//=======================    TO-DO-LIST   ================================
//
// TODO Verificar se o Icon irá receber handleClick
//
// =======================================================================

import Lupa from "../../images/Icons/lupa2.png";
import {
  IconButtonContainer,
  InputContainer,
  SearchBarCointainer,
  Img,
} from "./styles";

const SearchBar = ({ handleInput, value, handleClick }) => {
  return (
    <SearchBarCointainer>
      <InputContainer
        placeholder="Pesquisar"
        value={value}
        onChange={handleInput}
        onKeyPress={(evt) => evt.key === "Enter" && handleClick()}
      />
      <IconButtonContainer>
        <Img alt="Searc Icon" onClick={() => handleClick()} src={Lupa} />
      </IconButtonContainer>
    </SearchBarCointainer>
  );
};

export default SearchBar;
