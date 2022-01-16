function testDirection(direction) {
  let incorrect = new RegExp("[^nsew]", "gi");
  const wrongDirection = incorrect.test(direction);

  return wrongDirection || wrongDirection.length > 1 ? false : true;
}

module.exports = testDirection;
