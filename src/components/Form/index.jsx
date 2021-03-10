/*
todo Props necessaria = instructions

essa prop é um objeto que recebe as chaves:

*icon - Format: variavel --- imagem que ira aparecer no topo da div
*exemple - import IconeTest from "./img/icon.png";
*to use - icon: IconeTest, 
!--------------------
*title - Format: string --- nome que ficara  no topo do form
*exemple - "Fazer Login"
*to use - title: "Fazer Login",
!--------------------
*inputName - Format: array aninhado --- name e placeholder do input respectivamente
*exemple - [["name", "seu nome"], ["email", "seu email"]]
*to use - inputname: [["name", "seu nome"], ["email", "seu email"]],
!--------------------
*buttonName: Format: string --- nome do botão 
*exemple - "Enviar"
*to use - buttonName: "Enviar",
!--------------------
*buttonAction: Format: Function --- Função a ser usada no onClick do botão
*exemple - const test = () => {console.log("TESTANDO")}
*to use - buttonAction: test,

*/

import { FormContainer } from "./style";
import Input from "../Input";
import Button from "../Button";

const FormStyle = ({ instructions }) => {
  const { icon, title, inputName, buttonName, buttonAction } = instructions;

  return (
    <FormContainer>
      <img src={icon} alt="Icon" />
      <h1>{title}</h1>
      <form>
        {inputName.map((input, index) => {
          return <Input placeholder={input[1]} name={input[0]} key={index} />;
        })}
        <Button name={buttonName} action={buttonAction} />
      </form>
    </FormContainer>
  );
};

export default FormStyle;
