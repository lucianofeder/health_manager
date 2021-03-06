/*
Todo - Instruções

?Passar esses componentes por props: add, title, modalAdd e modalEdit

!--------------
*title - format: string - titulo do card
*example - "Grupos"
*to use - title="Grupos"
!--------------
*modalAdd - format: component - Componente a ser usado ao adicionar
*example - <CreateGroup/>
*to use - modalAdd={<CreateGroup/>}
!--------------
*modalEdit - format: component - Componente a ser usado ao editar
*example - <EditGroup/>
*to use - modalEdit={<EditGroup/>}

?passar esse componente por children: children

*children - format: component - Componente a ficar dentro do card
*example - <p>Test</p>;
*to use - <Card>  
*            <p>Test</p> 
*          </Card>

*/

import { CardContainer } from "./style";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Card = (props) => {
  const { id } = useParams();
  const id_user = useSelector((state) => state.users.user_id);

  const { children, title, modalAdd, modalEdit } = props;
  return (
    <CardContainer>
      {id === id_user && (
        <div className="iconModal">
          {modalAdd === undefined ? undefined : modalAdd}
          {modalEdit}
        </div>
      )}
      <h1>{title}</h1>
      <div className="container">
        {children === undefined ? <p>No Informations</p> : children}
      </div>
    </CardContainer>
  );
};

export default Card;
