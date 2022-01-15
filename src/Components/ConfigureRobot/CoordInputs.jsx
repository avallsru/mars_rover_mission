import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useNavigate } from "react-router-dom";

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

import { setInitialCoords } from "../../redux/actions/robotActions";

import "./CoordInput.scss";

let totalLines = 10;
const CoordInputs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [alertVisibility, setAlertVisibility] = useState(false);

  useEffect(() => {
    const alertBox = document.getElementById("coords-alert");

    alertVisibility
      ? (alertBox.className = " visible")
      : (alertBox.className = "hidden");
  }, [alertVisibility]);

  function handleChange({ target }) {
    const coordNumber = Number(target.value);

    if (coordNumber >= 0 && coordNumber < totalLines) {
      setAlertVisibility(false);
      if (target.className.includes("xInput")) {
        setX(target.value);
      } else if (target.className.includes("yInput")) {
        setY(target.value);
      }
    } else {
      setAlertVisibility(true);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setInitialCoords(x, y));
    navigate("/controller");
  }

  function closeAlert() {
    setAlertVisibility(false);
  }

  return (
    <div>
      <Input id="x-input" onChange={handleChange} className="xInput" />
      <Input onChange={handleChange} className="yInput" />

      <Container id="coords-alert" className="visible">
        <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2}>It's not correct!</AlertTitle>
          <AlertDescription>
            Introduce a number between 0 and 9
          </AlertDescription>
          <CloseButton
            position="absolute"
            right="8px"
            top="8px"
            onClick={closeAlert}
          />
        </Alert>
      </Container>
      <Button type="submit" onClick={handleSubmit}>
        Set Robot
      </Button>
    </div>
  );
};

export default CoordInputs;
