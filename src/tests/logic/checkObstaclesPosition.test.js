const checkObstaclesPosition = require("../../logic/checkObstaclesPosition.js");

test("should return true if the coords given are from an obstacle", () => {
  const obstacleXCoord = 9;
  const obstacleYCoord = 2;

  expect(checkObstaclesPosition(obstacleXCoord, obstacleYCoord)).toEqual(true);
});

test("should return false if the coords given are empty of obstacles", () => {
  const emptyXCoord = 5;
  const emptyYCoord = 4;

  expect(checkObstaclesPosition(emptyXCoord, emptyYCoord)).toEqual(false);
});
