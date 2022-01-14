import React, { useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { robotMovement } from "../../logic/movements";
import {
  changeDirection,
  setPreviousRobot,
  moveRobot,
} from "../../redux/actions/robotActions";

const CommandInput = () => {
  const dispatch = useDispatch();
  const { xCoord, yCoord, direction } = useSelector(
    (store) => store.robotsReducers
  );
  const [submitState, setSubmitState] = useState(false);
  const [commands, setCommands] = useState("");

  function handleChange({ target }) {
    setCommands(target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    testCommands(commands)
      ? changeRobotPosition()
      : alert(`Just "f", "l", "r" are accepted commands`);
  }

  function testCommands(commands) {
    let commandsAccepted = new RegExp("[frl]", "gm");
    return commandsAccepted.test(commands);
  }
  function changeRobotPosition() {
    let commandsArray = commands.split("");
    let temporalDirection = direction;
    let temporalX = xCoord;
    let temporalY = yCoord;
    commandsArray.forEach((command) => {
      debugger;
      dispatch(setPreviousRobot(temporalX, temporalY));
      let { newPosition, newDirection } = robotMovement(
        command,
        temporalX,
        temporalY,
        temporalDirection
      );
      temporalX = newPosition.x;
      temporalY = newPosition.y;
      temporalDirection = newDirection;
      dispatch(moveRobot(newPosition.x, newPosition.y));
      dispatch(changeDirection(newDirection));
    });
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
