import {
  SET_INTIAL_COORDS,
  CHANGE_DIRECTION,
  SET_PREVIOUS_ROBOT,
  SET_NEW_COORDS,
} from "../types";

function setInitialCoords(xCoord, yCoord) {
  return {
    type: SET_INTIAL_COORDS,
    payload: { x: xCoord, y: yCoord },
  };
}

function changeDirection(direction) {
  return { type: CHANGE_DIRECTION, payload: direction };
}

function moveRobot(xCoord, yCoord) {
  return { type: SET_NEW_COORDS, payload: { x: xCoord, y: yCoord } };
}

function setPreviousRobot(xCoord, yCoord) {
  return { type: SET_PREVIOUS_ROBOT, payload: { x: xCoord, y: yCoord } };
}

export { setInitialCoords, changeDirection, setPreviousRobot, moveRobot };
