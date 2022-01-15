const robotMovement = require("../../logic/movements");

test("the robot should change the direction after a l/r movement", () => {
  let result = robotMovement("l", 5, 6, "east");
  expect(result.newDirection).toEqual("north");

  result = robotMovement("r", 2, 3, "north");
  expect(result.newDirection).toEqual("east");
});

test("the robot should move to new coords after a movement", () => {
  const { newPosition } = robotMovement("f", 2, 1, "south");
  expect(newPosition).toEqual({ x: 2, y: 0 });
});

test("the robot should not move to new coords if there is an obstacle", () => {
  const { newPosition } = robotMovement("r", 0, 2, "north");
  expect(newPosition).toEqual({ x: 0, y: 2 });
});

test("the robot should not move to new coords if it arribes to map boundaries", () => {
  const { newPosition } = robotMovement("l", 0, 0, "north");
  expect(newPosition).toEqual({ x: 0, y: 0 });
});
