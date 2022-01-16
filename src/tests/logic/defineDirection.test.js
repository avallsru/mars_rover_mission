const defineDirection = require("../../logic/defineDirection");

test("should return different directions depending on the command", () => {
  const direction = "e";
  const command_1 = "r";
  const command_2 = "l";

  expect(defineDirection(direction, command_1)).toEqual("s");
  expect(defineDirection(direction, command_2)).toEqual("n");
});

test("should return 'n' when you pass 'w' and 'r' command", () => {
  expect(defineDirection("w", "r")).toEqual("n");
});

test("should return west when you pass 'n' as direction and 'l' command", () => {
  expect(defineDirection("n", "l")).toEqual("w");
});
