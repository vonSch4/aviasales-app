import { GET_SEARCH_ID } from '../types';

function searchIdReducer(state = '', action = {}) {
  const { type, payload } = action;

  switch (type) {
    case GET_SEARCH_ID:
      return payload;
    default:
      return state;
  }
}

export default searchIdReducer;
