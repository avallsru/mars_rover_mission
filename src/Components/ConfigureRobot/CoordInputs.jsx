import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Container, Input, Button } from "@chakra-ui/react";

import { setInitialCoords } from "../../redux/actions/robotActions";
import CustomizedAlert from "../Alert/CustomizedAlert";

import "../Alert/CustomizedAlerts.scss";

// import "../Alert/Alert.scss";

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
      ? (alertBox.className = "visible")
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

  return (
    <div>
      <Input id="x-input" onChange={handleChange} className="xInput" />
      <Input onChange={handleChange} className="yInput" />

      <Container id="coords-alert">
        <CustomizedAlert type={"coords"} />
      </Container>
      <Button type="submit" onClick={handleSubmit}>
        Set Robot
      </Button>
    </div>
  );
};

export default CoordInputs;
