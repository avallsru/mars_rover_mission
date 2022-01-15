function testCommands(commands) {
  let incorrect = new RegExp("[^frl]", "gi");

  const incorrectCommands = incorrect.test(commands);

  if (commands === "" || !incorrectCommands) {
    return true;
  }
  return false;
}

module.exports = testCommands;
