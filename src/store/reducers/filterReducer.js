import { FILTERS } from '../constants';
import { SET_FILTER } from '../types';

function toggleFilterAll(enabled) {
  if (enabled) return [...Object.values(FILTERS)];

  return [];
}

function toggleFilters(state, filter, enabled) {
  if (state.length === 5 && !enabled) {
    return state.filter((el) => {
      return el !== filter && el !== FILTERS.ALL;
    });
  }

  if (state.length === 3 && enabled) {
    return [...Object.values(FILTERS)];
  }

  if (enabled) return [...state, filter];

  return state.filter((el) => el !== filter);
}

function filterReducer(state = [...Object.values(FILTERS)], action = {}) {
  const { type, payload, enabled } = action;

  switch (type) {
    case SET_FILTER:
      return payload === FILTERS.ALL
        ? toggleFilterAll(enabled)
        : toggleFilters(state, payload, enabled);
    default:
      return state;
  }
}

export default filterReducer;
