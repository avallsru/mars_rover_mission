import { CHANGE_DIRECTION, SET_PREVIOUS_ROBOT, SET_NEW_COORDS } from "../types";

function changeDirection(direction) {
  return { type: CHANGE_DIRECTION, payload: direction };
}

function moveRobot(xCoord, yCoord) {
  return { type: SET_NEW_COORDS, payload: { x: xCoord, y: yCoord } };
}

function setPreviousRobot(xCoord, yCoord) {
  return { type: SET_PREVIOUS_ROBOT, payload: { x: xCoord, y: yCoord } };
}

export { changeDirection, setPreviousRobot, moveRobot };
