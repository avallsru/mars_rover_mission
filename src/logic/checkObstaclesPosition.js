const obstacles = require("../Components/PlanetMap/obstacles");

function checkObstaclesPosition(xCoord, yCoord) {
  for (let index = 0; index < obstacles.length; index++) {
    let concreteObstacle = obstacles[index];

    if (
      concreteObstacle[0] === Number(xCoord) &&
      concreteObstacle[1] === Number(yCoord)
    ) {
      return true;
    }
  }
  return false;
}

module.exports = checkObstaclesPosition;
