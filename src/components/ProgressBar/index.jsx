import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { ProgressContainer, ProgressButtons } from "./style";

import addProgress from "../../images/Icons/addProgress.svg";
import subProgress from "../../images/Icons/subProgress.svg";

import api from "../../services/api";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          id="number"
        >{`${Math.round(props.value.valueProgress)}%`}</Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function CircularStatic(valueProgress) {
  const { token } = useSelector((state) => state.users);
  const [progressNumber, setProgressNumber] = useState(0);

  const patchDataProgess = async (isPositive) => {
    let data = {};

    let positive = valueProgress.valueProgress + 10;
    let negative = valueProgress.valueProgress - 10;

    data["how_much_achieved"] = isPositive ? positive : negative;

    await api
      .patch(`${valueProgress.url}/${valueProgress.id.toString()}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => setProgressNumber(progressNumber + 1));
    valueProgress.setLoaded(false);
  };

  const [progress, setProgress] = useState(valueProgress);

  useEffect(() => {
    !valueProgress.loaded && valueProgress.getDataPageGroup();
  }, [progressNumber]);

  return (
<<<<<<< HEAD
    <ProgressContainer progress={progress}>
      <ProgressButtons
        src={addProgress}
        alt=""
        onClick={() => patchDataProgess(true)}
      />

      <CircularProgressWithLabel id="ProgressBar" value={progress} />
      <ProgressButtons
        src={subProgress}
        alt="subProgress Icon"
        onClick={() => patchDataProgess(false)}
      />
=======
    <ProgressContainer progress={valueProgress.valueProgress}>
      <button
        disabled={valueProgress.valueProgress === 100}
        onClick={() => patchDataProgess(true)}
      >
        Up
      </button>
      <CircularProgressWithLabel id="ProgressBar" value={progress} />
      <button
        disabled={valueProgress.valueProgress === 0}
        onClick={() => patchDataProgess(false)}
      >
        Down
      </button>
>>>>>>> 124aa65323694c453c5687803c0ec6be52dbff16
    </ProgressContainer>
  );
}
