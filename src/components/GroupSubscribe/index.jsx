import ModalForm from "../../components/ModalForm";
import { Subtitle } from "./style";
import add from "../../images/add.svg";
import pen from "../../images/pen.svg";
import adduser from "../../images/addUser.svg";

import goalsModal from "../../images/Icons/goalsModal.svg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import api from "../../services/api";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { CardContainer } from "./style";
import { NameGroupContainer, Title, ListStyle, TypeGroup } from "./style";
import { ButtonAdd } from "./style";
import Modal from "../Modal";
import { ButtonStyle } from "../Button/style";
const GroupSubscribe = () => {
  const { id } = useParams();
  const { token } = useSelector((state) => state.users);
  const [loaded, setLoaded] = useState(false);
  const [group, setGroup] = useState([]);
  const [ParticipantsNew, SetParticipantsNew] = useState(0);

  console.log(group);
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    category: yup.string().required("Campo Obrigatório"),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const getDataPageGroup = async () => {
    await api
      .get(`groups/${id}/`)
      .then((res) => SetParticipantsNew(ParticipantsNew + 1))
      .catch((res) => console.log(res));
    setLoaded(true);
  };

  const handleSubscribe = (data) => {
    api
      .post(`groups/${id}/subscribe/`, null, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => console.log(res))
      .catch((res) => console.log(res));
    console.log(token);
    setLoaded(false);
  };
  useEffect(() => {
    !loaded && getDataPageGroup();

    console.log(ParticipantsNew);
  }, [ParticipantsNew]);
  return (
    <ButtonAdd>
      <Modal id="modal" isButton={false} ImgSrc={adduser} iconWidth="300px">
        <h2>Desejar entrar no grupo ??</h2>
        <ButtonStyle onClick={handleSubscribe}>Entrar no grupo</ButtonStyle>
      </Modal>
    </ButtonAdd>
  );
};

export default GroupSubscribe;
