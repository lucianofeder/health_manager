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
const GroupSubscribe = ({ getDataPageGroup, setLoaded, group }) => {
  const { id } = useParams();
  const { token, user_id } = useSelector((state) => state.users);

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
    console.log(group.users?.find((elem) => elem.id == user_id));
    console.log(group.users);

    console.log(user_id);
  }, [ParticipantsNew]);
  return (
    <ButtonAdd>
      {group.users?.find((elem) => elem.id == user_id) ? (
        <ModalConfirm
          id="modal"
          isButton={false}
          ImgSrc={adduser}
          iconWidth="300px"
          handleSubscribe={handleSubscribe}
          message="OK"
        >
          <h2>Você já está nessa equipe</h2>
        </ModalConfirm>
      ) : (
        <ModalConfirm
          id="modal"
          isButton={false}
          ImgSrc={adduser}
          iconWidth="300px"
          handleSubscribe={handleSubscribe}
          message="Confirmar"
        >
          <h2>Desejar entrar neste grupo ?</h2>
        </ModalConfirm>
      )}
    </ButtonAdd>
  );
};

export default GroupSubscribe;
