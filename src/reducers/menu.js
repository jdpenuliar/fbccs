import { FETCH_DATA, GET_CURRENT_TIME, GET_CURRENT_DAY } from '../actions/types';

const INITIAL_STATE = {
 allData: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, allData: action.payload };
    default:
      return state;
  }
};
