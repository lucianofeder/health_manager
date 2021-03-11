/*

!----------------------------*
Esse componente respeita as funcionalidades do Modal e do Form Style
!----------------------------
Para fazer as mesmas instruções será necessário usar props
- Quando usar o array de input, englobe em uma variável:
const inputName = [
["name", "seu nome"],
["email", "seu email"],
];

e passe por props normalmente

inputName={inputName}

*!----------------------------*
EXEMPLO DE USO:
<ModalForm
                ImgSrc={logo3}
                icon={habitsModal}
                iconWidth="300px"
                title="Fazer Login"
                inputName={inputName}
                buttonName="Enviar"
                formAction={() => action()}
                reference="oi"
                errors="errou"
              />
*- Devido a palavra ref ser reservada, deverá ser usada 'reference' como prop para ref:
reference={ref}
- */

import Modal from "../../components/Modal";
import FormStyle from "../../components/Form";

const ModalForm = ({
  ImgSrc,
  icon,
  iconWidth,
  title,
  inputName,
  buttonName,
  formAction,
  ref,
  errors,
}) => {
  return (
    <>
      <Modal ImgSrc={ImgSrc}>
        <FormStyle
          instructions={{
            icon: icon,
            iconWidth: iconWidth,
            title: title,
            inputName: inputName,
            buttonName: buttonName,
          }}
          form={{
            formAction: formAction,
            reference: ref,
            errors: errors,
          }}
        />
      </Modal>
    </>
  );
};

export default ModalForm;
