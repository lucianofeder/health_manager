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
import { CardContainer } from "./style";
const GroupDescription = () => {
  const { id } = useParams();
  const { token } = useSelector((state) => state.users);
  const [loaded, setLoaded] = useState(false);
  const [group, setGroup] = useState([]);
  const [descriptionNew, SetDescriptionNew] = useState("");

  console.log(group);
  const schema = yup.object().shape({
    description: yup.string().required("Campo Obrigatório"),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getDataPageGroup = async () => {
    await api.get(`groups/${id}/`).then((res) => setGroup(res.data));
    setLoaded(true);
  };

  const inputEditGoals = [["description", "DESCRIÇÃO"]];

  const handleUpdateDescription = (data) => {
    api
      .patch(`groups/${group.id}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        SetDescriptionNew(data.description);
      });

    setLoaded(false);
  };
  useEffect(() => {
    !loaded && getDataPageGroup();

    console.log(descriptionNew);
  }, [descriptionNew]);
  return (
    <>
      <CardContainer>
        <div id="pen">
          <ModalForm
            isButton={false}
            ImgSrc={edit}
            icon={goalsModal}
            iconWidth="300px"
            title="edit description"
            inputName={inputEditGoals}
            buttonName="Editar"
            formAction={handleSubmit(handleUpdateDescription)}
            reference={register}
            errors={errors}
          />
        </div>
        <h1>Description</h1>
        {loaded && group.description ? group.description : "sem descrição"}
      </CardContainer>
    </>
  );
};

export default GroupDescription;
