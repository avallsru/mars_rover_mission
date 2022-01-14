import {
  SET_INTIAL_COORDS,
  CHANGE_DIRECTION,
  SET_PREVIOUS_ROBOT,
  SET_NEW_COORDS,
} from "../types";

const defaultRobot = {
  xCoord: 0,
  yCoord: 0,
  direction: "north",
  previousX: 0,
  previousY: 0,
};

export default function robotsReducer(state = defaultRobot, action) {
  switch (action.type) {
    case SET_INTIAL_COORDS: {
      return {
        ...state,
        xCoord: action.payload.x,
        yCoord: action.payload.y,
      };
    }
    case CHANGE_DIRECTION: {
      return { ...state, direction: action.payload };
    }
    case SET_NEW_COORDS: {
      return { ...state, xCoord: action.payload.x, yCoord: action.payload.y };
    }
    case SET_PREVIOUS_ROBOT: {
      return {
        ...state,
        previousX: action.payload.x,
        previousY: action.payload.y,
      };
    }
    default: {
      return state;
    }
  }
}
