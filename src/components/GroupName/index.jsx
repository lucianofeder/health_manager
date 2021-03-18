import ModalForm from "../../components/ModalForm";
import edit from "../../images/Icons/edit.svg";
import goalsModal from "../../images/Icons/goalsModal.svg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { NameGroupContainer, Title, TypeGroup } from "./style";
import { ContainerButtons } from "./style";
const GroupName = () => {
  const { id } = useParams();
  const { token } = useSelector((state) => state.users);
  const [loaded, setLoaded] = useState(false);
  const [group, setGroup] = useState([]);
  const [descriptionNew, SetDescriptionNew] = useState("");

  console.log(group);
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    category: yup.string().required("Campo Obrigatório"),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getDataPageGroup = async () => {
    await api
      .get(`groups/${id}/`)
      .then((res) => setGroup(res.data))
      .catch((res) => console.log(res));
    setLoaded(true);
  };

  const inputEditGoals = [
    ["name", "NOME DO GRUPO"],
    ["category", "CATEGORIA"],
  ];

  const handleUpdateName = (data) => {
    api
      .patch(`groups/${group.id}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        SetDescriptionNew(data.name);
      });

    setLoaded(false);
  };
  useEffect(() => {
    !loaded && getDataPageGroup();

    console.log(descriptionNew);
  }, [descriptionNew]);
  return (
    <div>
      <div id="pen">
        <ContainerButtons>
          <ModalForm
            isButton={false}
            ImgSrc={edit}
            icon={goalsModal}
            iconWidth="300px"
            title="edit group"
            inputName={inputEditGoals}
            buttonName="Editar"
            formAction={handleSubmit(handleUpdateName)}
            reference={register}
            errors={errors}
          />
        </ContainerButtons>
      </div>
      <NameGroupContainer>
        <Title>{loaded && group.name}</Title>
        <TypeGroup>{loaded && group.category}</TypeGroup>
      </NameGroupContainer>
    </div>
  );
};

export default GroupName;
