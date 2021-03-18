/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import ModalConfirm from "../../components/ModalConfirm";
import adduser from "../../images/addUser.svg";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { ButtonAdd } from "./style";

const GroupSubscribe = ({ getDataPageGroup, setLoaded, group }) => {
  const { id } = useParams();
  const { token, user_id } = useSelector((state) => state.users);

  const [ParticipantsNew, SetParticipantsNew] = useState(0);

  const handleSubscribe = (data) => {
    api
      .post(`groups/${id}/subscribe/`, null, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => SetParticipantsNew(ParticipantsNew + 1));
    setLoaded(false);
  };
  useEffect(() => {
    getDataPageGroup();
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
