//=======================    TO-DO-LIST   ================================
//
// TODO Verificar se o Icon irá receber handleClick
//
// =======================================================================

import { BiSearchAlt } from "react-icons/bi";
import { SearchBarCointainer } from "./styles";

const SearchBar = () => {
  return (
    <SearchBarCointainer>
      <input placeholder="Pesquisar" className="InputBar" />
      <BiSearchAlt size="30px" onClick={(e) => console.log("Funcionando!")} />
    </SearchBarCointainer>
  );
};

export default SearchBar;
