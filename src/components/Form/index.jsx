/*
todo Props necessaria = instructions

?essa prop é um objeto que recebe as chaves:

*icon - Format: variavel --- imagem que ira aparecer no topo da div
?exemple - import IconeTest from "./img/icon.png";
*to use - icon: IconeTest, 
!--------------------
*iconWidth - Format: string --- Valor do width da Imagem Icon
?exemple - 250px (DEVE CONTER A MEDIDA)
*to use - iconWidth: "250px",
!--------------------
*title - Format: string --- nome que ficara  no topo do form
?exemple - "Fazer Login"
*to use - title: "Fazer Login",
!--------------------
*inputName - Format: array aninhado --- name e placeholder do input respectivamente
?exemple - [["name", "seu nome"], ["email", "seu email"]]
*to use - inputname: [["name", "seu nome"], ["email", "seu email"]],
!--------------------
*buttonName - Format: string --- nome do botão 
?exemple - "Enviar"
*to use - buttonName: "Enviar",

TODO--------------------
TODO Props necessaria = form

*formAction: Format: Function --- Função handleForm
?exemple - handleSubmit(handleForm)
*to use - formAction: handleSubmit(handleForm),
!--------------------
*ref - Format: Variavel --- variavel register do useForm;
?exemple - register;
*to use - ref: register,
!--------------------
*errors - Format: Variavel --- variavel errors do useForm;
?exemple - errors
*to use - errors: errors,
!--------------------

Para testar o layout:
Comentar 'key', 'reference' e 'error' e passar uma função qualquer
em 'form ={{ formAction: qualquerFn() }}'
*/

import { FormContainer } from "./style";
import Input from "../Input";
import Button from "../Button";

const FormStyle = ({ instructions, form }) => {
  const { icon, iconWidth, title, inputName, buttonName } = instructions;

  const { formAction, ref, errors } = form;

  console.log(instructions, form);
  return (
    <FormContainer>
      <img src={icon} alt="Icon" style={{ width: iconWidth }} />
      <h1>{title}</h1>
      <form onSubmit={formAction}>
        {inputName.map((input, index) => {
          return (
            <Input
              placeholder={input[1]}
              name={input[0]}
              key={index}
              reference={ref}
              type={input[2]}
              error={errors[input[0]]?.message}
            />
          );
        })}
        <Button>{buttonName}</Button>
      </form>
    </FormContainer>
  );
};

export default FormStyle;
