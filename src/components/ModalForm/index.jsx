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
Para ativar ou desativar o aparecimento do botão é necessário passar a props em booleano

*!----------------------------*
EXEMPLO DE USO:
<ModalForm
                isButton={true}
                nameBtn="Enviar"
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
  reference,
  errors,
  isButton,
  nameBtn,
  size,
}) => {
  return (
    <>
      <Modal ImgSrc={ImgSrc} isButton={isButton} nameBtn={nameBtn} size={size}>
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
            ref: reference,
            errors: errors,
          }}
        />
      </Modal>
    </>
  );
};

export default ModalForm;
