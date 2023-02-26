import { SET_STOP_GETTING_TICKETS } from '../types';

function stopLoadingReducer(state = false, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case SET_STOP_GETTING_TICKETS:
      return payload;
    default:
      return state;
  }
}

export default stopLoadingReducer;
