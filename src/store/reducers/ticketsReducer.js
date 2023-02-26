import { GET_PACK_OF_TICKETS, SET_SORTING_TICKETS } from '../types';

function ticketsReducer(state = [], action = {}) {
  const { type, payload } = action;

  switch (type) {
    case GET_PACK_OF_TICKETS:
      return [...state, ...payload];

    case SET_SORTING_TICKETS:
      return payload;

    default:
      return state;
  }
}

export default ticketsReducer;
