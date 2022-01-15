const testCommands = require("../logic/testCommands");

test("should return true if the command line includes just f/r/l", () => {
  let command = "lrrllffflrf";

  expect(testCommands(command)).toEqual(true);
});

test("should return false if the command line include chars other than f/r/l", () => {
  let command = "lrrrsffflrf";

  expect(testCommands(command)).toEqual(false);
});
