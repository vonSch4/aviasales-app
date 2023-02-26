import { SET_SORTING, RESET_TICKETS_COUNT } from '../types';

export default function setSorting(sorting) {
  return function wrapper(dispatch) {
    dispatch({
      type: RESET_TICKETS_COUNT,
    });
    dispatch({
      type: SET_SORTING,
      payload: sorting,
    });
  };
}
