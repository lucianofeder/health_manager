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
    <ProgressContainer progress={valueProgress.valueProgress}>
      <ProgressButtons
        onClick={() =>
          valueProgress.valueProgress === 100 ? null : patchDataProgess(true)
        }
        src={addProgress}
        alt="add progress icon"
      />
      <CircularProgressWithLabel id="ProgressBar" value={progress} />

      <ProgressButtons
        onClick={() =>
          valueProgress.valueProgress === 0 ? null : patchDataProgess(false)
        }
        src={subProgress}
        alt="subProgress Icon"
      />
    </ProgressContainer>
  );
}
