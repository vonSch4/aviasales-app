import {
  GET_PACK_OF_TICKETS,
  SORT_CHEAPEST,
  SORT_FASTEST,
  SORT_OPTIMAL,
} from '../types';

const initialState = {
  allTickets: [],
  visibleTickets: [],
};

function compareCheapest(a, b) {
  return a.price - b.price;
}

function compareFastest(a, b) {
  return (
    a.segments[0].duration +
    a.segments[1].duration -
    (b.segments[0].duration + b.segments[1].duration)
  );
}

function compareOptimal(a, b) {
  return (
    a.segments[0].stops.length +
    a.segments[1].stops.length -
    (b.segments[0].stops.length + b.segments[1].stops.length)
  );
}

function ticketsReducer(state = initialState, action = {}) {
  const { type, payload } = action;
  const { allTickets } = state;
  const newState = {};

  switch (type) {
    case GET_PACK_OF_TICKETS:
      newState.allTickets = [...allTickets, ...payload];
      newState.visibleTickets = [...newState.allTickets.slice(0, 5)];
      return newState;

    case SORT_CHEAPEST:
      newState.allTickets = [...allTickets].sort(compareCheapest);
      newState.visibleTickets = [...newState.allTickets.slice(0, 5)];
      return newState;

    case SORT_FASTEST:
      newState.allTickets = [...allTickets].sort(compareFastest);
      newState.visibleTickets = [...newState.allTickets.slice(0, 5)];
      return newState;

    case SORT_OPTIMAL:
      newState.allTickets = [...allTickets].sort(compareOptimal);
      newState.visibleTickets = [...newState.allTickets.slice(0, 5)];
      return newState;

    default:
      return state;
  }
}

export default ticketsReducer;
