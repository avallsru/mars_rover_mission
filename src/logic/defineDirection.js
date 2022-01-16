const directionsArr = ["n", "e", "s", "w"];

function defineDirection(direction, command) {
  const directionIndex = directionsArr.indexOf(direction);
  let newIndex;
  switch (command) {
    case "f": {
      return direction;
    }
    case "r": {
      newIndex = directionIndex + 1;
      break;
    }
    case "l": {
      newIndex = directionIndex - 1;
      break;
    }
    default: {
      break;
    }
  }

  if (newIndex > directionsArr.length - 1) {
    newIndex = 0;
  } else if (newIndex < 0) {
    newIndex = directionsArr.length - 1;
  }

  return directionsArr[newIndex];
}

module.exports = defineDirection;
