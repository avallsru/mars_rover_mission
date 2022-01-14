import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { obstacles } from "./obstacles.jsx";
import { robotMovement } from "../../logic/movements";

import "./planet.scss";

const obstacles = require("./obstacles.jsx");

const Planet = () => {
  const dispatch = useDispatch();
  let totalColumns = 10;
  let totalRows = 10;
  let planetMap = [];
  const { direction, xCoord, yCoord } = useSelector(
    (store) => store.robotsReducers
  );
  const [robotToPrint, setRobotToPrint] = useState([]);
  // const [mapToPrint, setMapToPrint] = useState([])

  useEffect(() => {
    planetMap = [];
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

  for (let indexColumn = 0; indexColumn < totalColumns; indexColumn++) {
    let row = [];
    for (let indexRow = totalRows - 1; indexRow >= 0; indexRow--) {
      let mapPlace = {
        x: indexColumn,
        y: indexRow,
        coord: [indexColumn, indexRow],
        state: "empty",
      };
      row.push(mapPlace);
    }
    planetMap.push(row);
  }

  let mapToPrint = planetMap.map((row) => {
    return (
      <div key={Math.random() * Date.now()}>
        {row.map((cell) => {
          return (
            <div
              // className = {cellClass(cell.x, cell.y)}
              className="square"
              key={cell.coords}
              id={`${cell.x},${cell.y}`}
            />
          );
        })}
      </div>
    );
  });

  return <div className="planet">{mapToPrint}</div>;
};

export default Planet;
