import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import mapSetUp from "../../logic/mapSetUp";
import defineObstacles from "../../logic/defineObstacles";

import "./planet.scss";

const Planet = () => {
  let { mapToPrint } = mapSetUp();
  const { direction, xCoord, yCoord } = useSelector(
    (store) => store.robotsReducers
  );

  useEffect(() => {
    defineObstacles();

    let robot = document.getElementById(`${xCoord},${yCoord}`);
    robot.className += " robot";
    switch (direction) {
      case "n": {
        robot.className += " north";
        break;
      }
      case "s": {
        robot.className += " south";
        break;
      }
      case "e": {
        robot.className += " east";
        break;
      }
      case "w": {
        robot.className += " west";
        break;
      }
      default: {
        break;
      }
    }
  }, [xCoord, yCoord, direction]);

  return <div className="planet">{mapToPrint}</div>;
};

export default Planet;
