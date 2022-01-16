import React, { useState, useEffect } from "react";
import { Select } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { changeDirection } from "../../redux/actions/robotActions";

import "./ConfigureRobot.scss";
import testDirection from "../../logic/testDirection";
import CustomizedAlert from "../Alert/CustomizedAlert";

const DirectionSelector = () => {
  const dispatch = useDispatch();
  const [alertVisibility, setAlertVisibility] = useState(false);

  // useEffect(() => {
  //   const alertBox = document.getElementById("direction-alert");

  //   alertVisibility
  //     ? (alertBox.className = "visible")
  //     : (alertBox.className = "hidden");
  // }, [alertVisibility]);

  function handleChange({ target }) {
    if (!testDirection(target.value)) {
      setAlertVisibility(true);
    } else {
      setAlertVisibility(false);
      dispatch(changeDirection(target.value));
    }
  }
  function handleClick(e, direction) {
    e.preventDefault();
    dispatch(changeDirection(direction));
  }
  return (
    <div className="directions-container">
      <h3>Directions</h3>
      <div className="buttons-container">
        <button
          className="button-direction"
          onClick={(e) => handleClick(e, "n")}
        >
          <div className="direction north"></div>
          <p>north</p>
        </button>
        <button
          className="button-direction"
          onClick={(e) => handleClick(e, "e")}
        >
          <div className="direction east"></div>
          <p>east</p>
        </button>
        <button
          className="button-direction"
          onClick={(e) => handleClick(e, "s")}
        >
          <div className="direction south"></div>
          <p>south</p>
        </button>
        <button
          className="button-direction"
          onClick={(e) => handleClick(e, "w")}
        >
          <div className="direction west"></div>
          <p>west</p>
        </button>
      </div>
    </div>
  );
};

export default DirectionSelector;
