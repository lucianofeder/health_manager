import { DivHabits, LastContainer, Adjust, HabitLine, DivAdd } from "./styled";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import CircularStatic from "../ProgressBar";

import ModalForm from "../ModalForm";

import CreateHabit from "../CreateHabit";

import api from "../../services/api";

import Edit from "../../images/pen.svg";
import Image from "../../images/Undraw/Habit.svg";
import TravelImage from "../../images/Undraw/Traveler.svg";

const CardHabit = ({
  TravelImg,
  habits,
  loaded,
  setLoaded,
  id,
  user_id,
  token,
  getDataHomeUser,
}) => {
  const schema = yup.object().shape({
    title: yup.string(),
    category: yup.string(),
    frequency: yup.string(),
    difficulty: yup.string(),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const PatchDataHabits = async (id_habit, data, hma) => {
    data["how_much_achieved"] = hma;
    await api
      .patch(`habits/${id_habit}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then();
    reset();
  };

  const DeleteDataHabits = async (id) => {
    await api.delete(`habits/${id}/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  const inputName = [
    ["title", "Editar Habito"],
    ["category", "Categoria"],
    ["difficulty", "Mudar a dificuldade"],
    ["frequency", "Frequencia"],
  ];

  return (
    <LastContainer>
      <h1>Habits</h1>
      <Adjust>
        <DivHabits className="container">
          {habits === undefined ? (
            <p>No Habits</p>
          ) : loaded && id === user_id ? (
            habits.map((personHabit, index) => (
              <div key={index}>
                <h2>{personHabit.title}</h2>
                <h3>{personHabit.category}</h3>
                <HabitLine>
                  <p>{personHabit.frequency}</p>
                  <p>{personHabit.difficulty}</p>
                  <CircularStatic
                    url="habits"
                    id={personHabit.id}
                    valueProgress={personHabit.how_much_achieved}
                    setLoaded={setLoaded}
                    loaded={loaded}
                    getDataHomeUser={getDataHomeUser}
                  />
                </HabitLine>
                <ModalForm
                  isButton={false}
                  ImgSrc={Edit}
                  icon={Image}
                  iconWidth="200px"
                  title="Editar Habit"
                  inputName={inputName}
                  buttonName="Editar"
                  formAction={handleSubmit((data) =>
                    PatchDataHabits(
                      personHabit.id,
                      data,
                      personHabit.how_much_achieved
                    )
                  )}
                  reference={register}
                  errors={errors}
                />
                <button onClick={() => DeleteDataHabits(personHabit.id)}>
                  X
                </button>
                <hr />
              </div>
            ))
          ) : (
            <p>Você não pode ver habitos de outros</p>
          )}
        </DivHabits>
        <DivAdd>
          <CreateHabit />
        </DivAdd>

        <img src={TravelImage} className="travelImage" />
      </Adjust>
    </LastContainer>
  );
};

export default CardHabit;
