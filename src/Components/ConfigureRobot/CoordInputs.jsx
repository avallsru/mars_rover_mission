import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Container, Input, Button } from "@chakra-ui/react";

import { setInitialCoords } from "../../redux/actions/robotActions";
import CustomizedAlert from "../Alert/CustomizedAlert";

import "../Alert/CustomizedAlerts.scss";
import "./ConfigureRobot.scss";

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
      if (target.className.includes("x-input")) {
        setX(target.value);
      } else if (target.className.includes("y-input")) {
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
    <div className="coords-container">
      <h3>Coords</h3>
      <div className="concrete-coord">
        <p>x position: </p>
        <input
          id="x-input"
          onChange={handleChange}
          className="x-input coords-input"
        />
      </div>
      <div className="concrete-coord">
        <p>y position: </p>
        <input onChange={handleChange} className="y-input coords-input" />
      </div>

      <div id="coords-alert">
        <CustomizedAlert type={"coords"} />
      </div>
      <button className="general-button" type="submit" onClick={handleSubmit}>
        Set Robot
      </button>
    </div>
  );
};

export default CoordInputs;
