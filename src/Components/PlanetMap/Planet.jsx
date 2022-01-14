import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { obstacles } from "./obstacles.jsx";
import { robotMovement } from "../../logic/movements";

import "./planet.scss";

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
    let obstacleToPrint;
    for (let obstaclePosition of obstacles) {
      obstacleToPrint = document.getElementById(
        `${obstaclePosition[0]},${obstaclePosition[1]}`
      );
      obstacleToPrint.className += " obstacle";
    }
  }, []);

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
  }, [xCoord, yCoord]);

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

  // let robotCoords = Robot();

  // function cellClass(xCoord, yCoord) {
  //   for(let obstaclePosition of obstacles) {
  //     if(xCoord === obstaclePosition[0] && yCoord=== obstaclePosition[1]){
  //       return "square obstacle"
  //     } else if(xCoord === robotCoords[0] && yCoord=== robotCoords[1]){
  //       return "square robot"
  //     }

  //   }
  //   return "square"
  // }

  let mapToPrint = planetMap.map((row) => {
    return (
      <div key={Math.random()}>
        {row.map((cell) => {
          return (
            <div
              // className = {cellClass(cell.x, cell.y)}
              className="square"
              key={cell.coords}
              id={`${cell.x},${cell.y}`}
            >{`${cell.x},${cell.y}`}</div>
          );
        })}
      </div>
    );
  });

  return <div className="planet">{mapToPrint}</div>;
};

export default Planet;
