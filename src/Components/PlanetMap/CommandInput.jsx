import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { robotMovement } from "../../logic/movements";
import { setPreviousRobot, moveRobot } from "../../redux/actions/robotActions";

const CommandInput = () => {
  const dispatch = useDispatch();
  const { xCoord, yCoord, direction } = useSelector(
    (store) => store.robotsReducers
  );

  const [commands, setCommands] = useState("");
  function handleChange({ target }) {
    setCommands(target.value);
  }
  function handleSubmit(e, value) {
    e.preventDefault();

    dispatch(setPreviousRobot(xCoord, yCoord));
    let actualRobotInfo = robotMovement(commands, xCoord, yCoord, direction);
    dispatch(moveRobot(actualRobotInfo.x, actualRobotInfo.y));
    console.log(actualRobotInfo);
  }
  return (
    <div>
      <input onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Send Commands
      </button>
    </div>
  );
};

export default CommandInput;
