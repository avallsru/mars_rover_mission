import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import {
  Container,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Input,
  Button,
} from "@chakra-ui/react";

import {
  changeDirection,
  setPreviousRobot,
  moveRobot,
} from "../../redux/actions/robotActions";

const robotMovement = require("../../logic/movements");

const CommandInput = () => {
  const dispatch = useDispatch();
  const { xCoord, yCoord, direction } = useSelector(
    (store) => store.robotsReducers
  );
  const [submitState, setSubmitState] = useState(false);
  const [commands, setCommands] = useState("");
  const [commandAlert, setCommandAlert] = useState(false);
  const [obstacleAlert, setObstacleAlert] = useState(false);
  const [xPositionToPrint, setXPositionToPrint] = useState(0);
  const [yPositionToPrint, setYPositionToPrint] = useState(0);

  useEffect(() => {
    const alertBox = document.getElementById("commands-alert");

    commandAlert
      ? (alertBox.className = "visible")
      : (alertBox.className = "hidden");
  }, [commandAlert]);

  useEffect(() => {
    const alertBox = document.getElementById("obstacle-alert");

    obstacleAlert
      ? (alertBox.className = "visible")
      : (alertBox.className = "hidden");
  }, [obstacleAlert]);

  // useEffect(() => {
  //   dispatch(moveRobot(xPositionToPrint, yPositionToPrint));
  // }, [xPositionToPrint, yPositionToPrint]);

  function handleChange({ target }) {
    setObstacleAlert(false);
    testCommands(target.value) ? setCommandAlert(false) : setCommandAlert(true);
    setCommands(target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    changeRobotPosition();
  }

  function testCommands(commands) {
    let incorrect = new RegExp("[^frl]", "gi");

    const incorrectCommands = incorrect.test(commands);

    if (commands === "" || !incorrectCommands) {
      return true;
    }
    return false;
  }
  function changeRobotPosition() {
    let commandsArray = commands.split("");
    let temporalDirection = direction;
    setXPositionToPrint(xCoord);
    setYPositionToPrint(yCoord);
    // let temporalX = xCoord;
    // let temporalY = yCoord;
    commandsArray.forEach((command) => {
      // setTimeout(() => {
      debugger;
      dispatch(setPreviousRobot(xPositionToPrint, yPositionToPrint));
      let { newPosition, newDirection, status } = robotMovement(
        command,
        // temporalX,
        // temporalY,
        xPositionToPrint,
        yPositionToPrint,
        temporalDirection
      );
      setXPositionToPrint(newPosition.x);
      setYPositionToPrint(newPosition.y);
      // temporalX = newPosition.x;
      // temporalY = newPosition.y;
      temporalDirection = newDirection;

      if (status === "obstacle") {
        setObstacleAlert(true);
      }
      // debugger;

      // dispatch(moveRobot(newPosition.x, newPosition.y));
      dispatch(changeDirection(newDirection));
      // }, 2000);
    });
  }
  return (
    <div>
      <Input onChange={handleChange} />
      <Button type="submit" onClick={handleSubmit}>
        Send Commands
      </Button>
      <Container id="commands-alert" className="visible">
        <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2}>It's not correct!</AlertTitle>
          <AlertDescription>Just "f", "l", "r" are accepted</AlertDescription>
          <CloseButton
            onClick={() => setCommandAlert(false)}
            position="absolute"
            right="8px"
            top="8px"
          />
        </Alert>
      </Container>
      <Container id="obstacle-alert" className="visible">
        <Alert status="warning">
          <AlertIcon />
          <AlertTitle mr={2}>Ops!</AlertTitle>
          <AlertDescription>
            It seems you've found an obstacle before finishing your command line
          </AlertDescription>
          <CloseButton
            onClick={() => setObstacleAlert(false)}
            position="absolute"
            right="8px"
            top="8px"
          />
        </Alert>
      </Container>
    </div>
  );
};

export default CommandInput;
