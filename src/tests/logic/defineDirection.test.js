const defineDirection = require("../../logic/defineDirection");

test("should return different directions depending on the command", () => {
  const direction = "east";
  const command_1 = "r";
  const command_2 = "l";

  expect(defineDirection(direction, command_1)).toEqual("south");
  expect(defineDirection(direction, command_2)).toEqual("north");
});

test("should return north when you pass 'west' and 'r' command", () => {
  expect(defineDirection("west", "r")).toEqual("north");
});

test("should return west when you pass 'north' as direction and 'l' command", () => {
  expect(defineDirection("north", "l")).toEqual("west");
});
