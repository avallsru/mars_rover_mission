import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { GiBubbleField } from "react-icons/gi";

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

    return (
      <div>
        <GiBubbleField />
      </div>
    );
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
