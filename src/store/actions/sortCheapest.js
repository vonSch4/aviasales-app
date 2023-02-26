import { SORT_CHEAPEST } from '../types';

export default function sortCheapest() {
  return (dispatch) => {
    dispatch({
      type: SORT_CHEAPEST,
    });
  };
}
