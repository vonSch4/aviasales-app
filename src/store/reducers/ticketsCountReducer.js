import { ADD_TICKETS_COUNT, RESET_TICKETS_COUNT } from '../types';

export default function ticketsCountReducer(state = 5, action = {}) {
  const { type } = action;

  switch (type) {
    case ADD_TICKETS_COUNT:
      return state + 5;
    case RESET_TICKETS_COUNT:
      return 5;
    default:
      return state;
  }
}
