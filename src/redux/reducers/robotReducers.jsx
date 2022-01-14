import {CHANGE_DIRECTION} from '../types';

const defaultRobot = {
  xCoord: 0,
  yCoord: 0,
  direction: "east"
}

export default function robotsReducer(state = defaultRobot, action) {
  switch(action.type) {
    case CHANGE_DIRECTION:  {
      return {...state, direction: action.payload}
    }
    default: {
      return state;
    }
  }
}
