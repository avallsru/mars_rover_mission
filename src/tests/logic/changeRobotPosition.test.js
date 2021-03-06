const changeRobotPosition = require("../../logic/changeRobotPosition");

test("the robot should move to a concrete position when passing a commands string", () => {
  const { xToGo, yToGo } = changeRobotPosition("ffrfff", 5, 5, "s");

  expect(xToGo).toEqual(1);
  expect(yToGo).toEqual(3);
});

test("should change the direction when passing a commands string", () => {
  const { newDir } = changeRobotPosition("fffrfll", 2, 8, "e");

  expect(newDir).toEqual("n");
});

test("should return different status if it can move, it found a boundary or it found an object", () => {
  let test1 = changeRobotPosition("fl", 0, 0, "n");

  const test2 = changeRobotPosition("ffrffflf", 5, 7, "s");

  const test3 = changeRobotPosition("frffl", 2, 3, "w");

  expect(test1.status).toEqual("boundaries");
  expect(test2.status).toBe("obstacle");
  expect(test3.status).toEqual("movement");
});
