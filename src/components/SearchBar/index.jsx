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
} from "./styles";

const SearchBar = () => {
  return (
    <SearchBarCointainer>
      <InputContainer placeholder="Pesquisar" />
      <IconButtonContainer>
        <img
          alt="Searc Icon"
          onClick={(e) => console.log("Funcionou!")}
          src={Lupa}
        />
      </IconButtonContainer>
    </SearchBarCointainer>
  );
};

export default SearchBar;
