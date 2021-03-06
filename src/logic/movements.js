const obstacles = require("../Components/PlanetMap/obstacles");
const defineDirection = require("./defineDirection");

function robotMovement(command, xCoord = 0, yCoord = 0, direction) {
  let robotPosition = { x: xCoord, y: yCoord };
  let newPosition = {};
  let status = "movement";
  xCoord = Number(xCoord);
  yCoord = Number(yCoord);

  //define new robot coordinates
  let newDirection = defineDirection(direction, command);
  switch (newDirection) {
    case "n": {
      newPosition = { x: xCoord, y: yCoord + 1 };
      break;
    }
    case "e": {
      newPosition = { x: xCoord + 1, y: yCoord };
      break;
    }
    case "w": {
      newPosition = { x: xCoord - 1, y: yCoord };
      break;
    }
    case "s": {
      newPosition = { x: xCoord, y: yCoord - 1 };
      break;
    }
    default: {
      break;
    }
  }

  //check if movement is possible
  let boundaries = checkMapBoundaries(newPosition);
  let obstacle = checkObstacles(newPosition);

  if (boundaries) {
    status = "boundaries";
    newPosition = robotPosition;
    return { newPosition, newDirection, status };
  } else if (obstacle) {
    newPosition = robotPosition;
    status = "obstacle";
    return { newPosition, newDirection, status };
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

module.exports = robotMovement;
