import { SET_SORTING } from '../types';

export default function setSorting(sorting) {
  return {
    type: SET_SORTING,
    payload: sorting,
  };
}
