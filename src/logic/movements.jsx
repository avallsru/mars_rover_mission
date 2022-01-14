import { obstacles } from "../Components/PlanetMap/obstacles";

export function robotMovement(command, xCoord, yCoord, direction) {
  let robotPosition = { x: xCoord, y: yCoord };
  let newPosition;

  //define new robot coordinates
  if (
    (direction === "north" && command === "f") ||
    (direction === "east" && command === "l") ||
    (direction === "west" && command === "r")
  ) {
    newPosition = { x: xCoord, y: yCoord + 1 };
  } else if (
    (direction === "north" && command === "r") ||
    (direction === "east" && command === "f") ||
    (direction === "south" && command === "l")
  ) {
    newPosition = { x: xCoord + 1, y: yCoord };
  } else if (
    (direction === "north" && command === "l") ||
    (direction === "west" && command === "f") ||
    (direction === "south" && command === "r")
  ) {
    newPosition = { x: xCoord - 1, y: yCoord };
  } else if (
    (direction === "east" && command === "r") ||
    (direction === "west" && command === "l") ||
    (direction === "south" && command === "f")
  ) {
    newPosition = { x: xCoord, y: yCoord - 1 };
  }

  //check if movement is possible

  let boundaries = checkMapBoundaries(newPosition);
  let obstacle = checkObstacles(newPosition);

  if (boundaries) {
    alert("you're trying to go outside the map!");
    return robotPosition;
  } else if (obstacle) {
    alert("ops!, you've found an obstacle");
    return robotPosition;
  }

  return newPosition;
}

function checkObstacles({ x, y }) {
  let isObstacle = false;
  obstacles.forEach((obstacleCoords) => {
    if (obstacleCoords[0] === x && obstacleCoords[1] === y) {
      isObstacle = true;
    }
  });
  return isObstacle;
}

function checkMapBoundaries({ x, y }) {
  let totalColumns = 10;
  let totalRows = 10;

  if (x < 0 || y < 0 || x >= totalColumns || y >= totalRows) {
    return true;
  }
  return false;
}
