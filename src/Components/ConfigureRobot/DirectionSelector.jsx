import React from "react";
import { useDispatch } from "react-redux";

import { changeDirection } from "../../redux/actions/robotActions";

import "./ConfigureRobot.scss";
import directionsArr from "./directions";

const DirectionSelector = () => {
  const dispatch = useDispatch();

  const directionsButtons = directionsArr.map((directionDetail) => {
    return (
      <button
        className="button-direction"
        onClick={(e) => handleClick(e, directionDetail.functionName)}
        key={directionDetail.functionName}
      >
        <div className={directionDetail.className}></div>
        <p>{directionDetail.buttonName}</p>
      </button>
    );
  });

  function handleClick(e, direction) {
    e.preventDefault();
    dispatch(changeDirection(direction));
  }
  return (
    <div className="directions-container">
      <h3>Directions</h3>

      <div className="buttons-container">{directionsButtons}</div>
    </div>
  );
};

export default DirectionSelector;
