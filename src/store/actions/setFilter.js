import { SET_FILTER, RESET_TICKETS_COUNT } from '../types';

export default function setFilter(filter, enabled) {
  return function wrapper(dispatch, getState) {
    const { ticketsCount } = getState();

    if (ticketsCount > 5) {
      dispatch({
        type: RESET_TICKETS_COUNT,
      });
    }

    dispatch({
      type: SET_FILTER,
      payload: filter,
      enabled,
    });
  };
}
