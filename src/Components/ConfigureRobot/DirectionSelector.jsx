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

  useEffect(() => {
    const alertBox = document.getElementById("direction-alert");

    alertVisibility
      ? (alertBox.className = "visible")
      : (alertBox.className = "hidden");
  }, [alertVisibility]);

  function handleChange({ target }) {
    if (!testDirection(target.value)) {
      setAlertVisibility(true);
    } else {
      setAlertVisibility(false);
      dispatch(changeDirection(target.value));
    }
  }
  return (
    <div class="direction-container">
      <p>direction (n, s, e, w): </p>
      <input
        id="x-input"
        onChange={handleChange}
        className="x-input coords-input"
      />
      <div id="direction-alert">
        <CustomizedAlert type={"direction"} />
      </div>
    </div>
  );
};

export default DirectionSelector;
