import { DivHabits, LastContainer, Adjust, HabitLine } from "./styled";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import CircularStatic from "../ProgressBar";

import api from "../../services/api";

const CardHabit = ({ id, TravelerImg }) => {
  const { token, user_id } = useSelector((state) => state.users);

  const [habits, setHabits] = useState();

  const [name, setName] = useState([]);

  const [loaded, setLoaded] = useState();

  const getDataHomeUser = async () => {
    await api
      .get("habits/personal/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setHabits(res.data))
      .then((res) => {
        console.log(res);
        setName([...name, res]);
      });
    setLoaded(true);
  };

  useEffect(() => {
    !loaded && getDataHomeUser();
  }, [name]);

  return (
    <LastContainer>
      <h1>Habits</h1>
      <Adjust>
        <DivHabits className="container">
          {loaded &&
            user_id === id &&
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
                  />
                </HabitLine>
                <hr />
              </div>
            ))}
        </DivHabits>
        <img src={TravelerImg} />
      </Adjust>
    </LastContainer>
  );
};

export default CardHabit;
