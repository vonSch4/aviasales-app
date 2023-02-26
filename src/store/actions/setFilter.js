import { SET_FILTER } from '../types';

export default function setFilter(filter, enabled) {
  return {
    type: SET_FILTER,
    payload: filter,
    enabled,
  };
}
