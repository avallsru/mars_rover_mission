const obstacles = require("../Components/PlanetMap/obstacles");

function robotMovement(command, xCoord = 0, yCoord = 0, direction) {
  let robotPosition = { x: xCoord, y: yCoord };
  let newPosition;
  let status = "movement";

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
  //change direction
  let newDirection = changeDirection(direction, command);

  if (boundaries) {
    status = "boundaries";
    newPosition = robotPosition;
    // newDirection = direction;
    // return robotPosition;
  } else if (obstacle) {
    newPosition = robotPosition;
    status = "obstacle";
  }

  return { newPosition, newDirection, status };
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

function changeDirection(direction, command) {
  if (
    (direction === "north" && command === "f") ||
    (direction === "east" && command === "l") ||
    (direction === "west" && command === "r")
  ) {
    return "north";
  } else if (
    (direction === "north" && command === "r") ||
    (direction === "east" && command === "f") ||
    (direction === "south" && command === "l")
  ) {
    return "east";
  } else if (
    (direction === "north" && command === "l") ||
    (direction === "south" && command === "r") ||
    (direction === "west" && command === "f")
  ) {
    return "west";
  } else if (
    (direction === "south" && command === "f") ||
    (direction === "east" && command === "r") ||
    (direction === "west" && command === "l")
  ) {
    return "south";
  }
}

module.exports = robotMovement;
