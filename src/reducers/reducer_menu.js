import { FETCH_DATA, GET_CURRENT_TIME, GET_CURRENT_DAY, GET_MENU } from '../actions/types';

const INITIAL_STATE = {
  allData: null,
  time: null,
  day: null,
  currentMenu: null,
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, allData: action.payload };
    case GET_CURRENT_TIME: 
      return { ...state, time: action.payload };
    case GET_CURRENT_DAY: 
      return { ...state, day: action.payload };
    case GET_MENU:
      return { ...state, currentMenu: action.payload };
    default:
      return state;
  }
}
