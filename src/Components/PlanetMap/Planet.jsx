import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import mapSetUp from "../../logic/mapSetUp";

import "./planet.scss";

const obstacles = require("./obstacles.jsx");

const Planet = () => {
  let mapToPrint = mapSetUp();
  const { direction, xCoord, yCoord } = useSelector(
    (store) => store.robotsReducers
  );

  useEffect(() => {
    defineObstacles();
    let robot = document.getElementById(`${xCoord},${yCoord}`);

    robot.className += " robot";
    switch (direction) {
      case "north": {
        robot.className += " north";
        break;
      }
      case "south": {
        robot.className += " south";
        break;
      }
      case "east": {
        robot.className += " east";
        break;
      }
      case "west": {
        robot.className += " west";
        break;
      }
      default: {
        break;
      }
    }
  }, [xCoord, yCoord, direction]);

  function defineObstacles() {
    let obstacleToPrint;
    for (let obstaclePosition of obstacles) {
      obstacleToPrint = document.getElementById(
        `${obstaclePosition[0]},${obstaclePosition[1]}`
      );
      obstacleToPrint.className += " obstacle";
    }
  }

  return <div className="planet">{mapToPrint}</div>;
};

export default Planet;
