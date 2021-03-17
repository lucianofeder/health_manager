import ModalConfirm from "../../components/ModalConfirm";
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
const GroupSubscribe = ({ getDataPageGroup, setLoaded }) => {
  const { id } = useParams();
  const { token } = useSelector((state) => state.users);

  const [group, setGroup] = useState([]);
  const [ParticipantsNew, SetParticipantsNew] = useState(0);

  const handleSubscribe = (data) => {
    api
      .post(`groups/${id}/subscribe/`, null, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => SetParticipantsNew(ParticipantsNew + 1))
      .catch((res) => console.log(res));
    console.log(token);
    setLoaded(false);
  };
  useEffect(() => {
    getDataPageGroup();
  }, [ParticipantsNew]);
  return (
    <ButtonAdd>
      <ModalConfirm
        id="modal"
        isButton={false}
        ImgSrc={adduser}
        iconWidth="300px"
        handleSubscribe={handleSubscribe}
      >
        <h2>Desejar entrar no grupo ??</h2>
      </ModalConfirm>
    </ButtonAdd>
  );
};

export default GroupSubscribe;
