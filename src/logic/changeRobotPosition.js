const robotMovement = require("./movements");

function changeRobotPosition(commandsStr, originalX, originalY, originalDir) {
  let commandsArray = commandsStr.split("");

  let nextDir = originalDir;
  let nextXCoord = originalX;
  let nextYCoord = originalY;
  let finalStatus;
  for (let index = 0; index < commandsArray.length; index++) {
    if (finalStatus === "obstacle" || finalStatus === "boundaries") {
      return {
        xToGo: nextXCoord,
        yToGo: nextYCoord,
        newDir: nextDir,
        status: finalStatus,
      };
    }
    let { newPosition, newDirection, status } = robotMovement(
      commandsArray[index],
      nextXCoord,
      nextYCoord,
      nextDir
    );
    nextXCoord = newPosition.x;
    nextYCoord = newPosition.y;
    nextDir = newDirection;
    finalStatus = status;
  }

  return {
    xToGo: nextXCoord,
    yToGo: nextYCoord,
    newDir: nextDir,
    status: finalStatus,
  };
}

module.exports = changeRobotPosition;
