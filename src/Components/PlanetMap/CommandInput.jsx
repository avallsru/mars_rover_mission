import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeDirection, moveRobot } from "../../redux/actions/robotActions";

import CustomizedAlert from "../Alert/CustomizedAlert";

import "../Alert/CustomizedAlerts.scss";

const testCommands = require("../../logic/testCommands");
const changeRobotPosition = require("../../logic/changeRobotPosition");

const CommandInput = () => {
  const dispatch = useDispatch();
  const { xCoord, yCoord, direction } = useSelector(
    (store) => store.robotsReducers
  );
  const [commands, setCommands] = useState("");
  const [alertVisibility, setAlertVisibility] = useState(false);
  const [alertType, setAlertType] = useState("commands");
  const [alertId, setAlertId] = useState("commands-alert");

  useEffect(() => {
    const alertBox = document.getElementById(alertId);

    alertVisibility
      ? (alertBox.className = "visible")
      : (alertBox.className = "hidden");
  }, [alertVisibility]);

  function handleChange({ target }) {
    if (testCommands(target.value)) {
      setAlertVisibility(false);
    } else {
      setAlertType("commands");
      setAlertVisibility(true);
      setAlertId("commands-alert");
    }

    setCommands(target.value.toLowerCase());
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { xToGo, yToGo, newDir, status } = changeRobotPosition(
      commands,
      xCoord,
      yCoord,
      direction
    );
    if (status !== "movement") {
      setAlertVisibility(true);
      setAlertType(status);
    }
    setCommands("");
    let commandsInput = document.getElementById("commands-line");
    commandsInput.value = "";
    commandsInput.focus();

    dispatch(moveRobot(xToGo, yToGo));
    dispatch(changeDirection(newDir));
  }

  return (
    <div className="commands-container">
      <div className="element-container">
        <input
          id="commands-line"
          className="commands-input"
          onChange={handleChange}
          autoFocus
        />
        <button className="general-button" type="submit" onClick={handleSubmit}>
          Send Commands
        </button>
      </div>

      <div className="element-container" id={alertId}>
        <CustomizedAlert type={alertType} />
      </div>
    </div>
  );
};

export default CommandInput;
