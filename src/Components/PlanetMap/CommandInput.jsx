import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Input, Button } from "@chakra-ui/react";

import {
  changeDirection,
  moveRobot,
  setPreviousRobot,
} from "../../redux/actions/robotActions";

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
  const [alertType, setAlertType] = useState("");

  useEffect(() => {
    const alertBox = document.getElementById("alert");

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
    }

    setCommands(target.value);
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
    dispatch(moveRobot(xToGo, yToGo));
    dispatch(changeDirection(newDir));
  }

  return (
    <div>
      <Input onChange={handleChange} />
      <Button type="submit" onClick={handleSubmit}>
        Send Commands
      </Button>

      <Container id="alert">
        <CustomizedAlert type={alertType} />
      </Container>
    </div>
  );
};

export default CommandInput;
