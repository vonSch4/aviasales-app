import { SORTING } from '../constants';
import { SET_SORTING } from '../types';

function sortingReducer(state = SORTING.CHEAPEST, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case SET_SORTING:
      return payload;
    default:
      return state;
  }
}

export default sortingReducer;
