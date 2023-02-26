import { SORTING } from '../store/constants';

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
  const stopsFirst = a.segments[0].stops.length + a.segments[1].stops.length;
  const stopsSecond = b.segments[0].stops.length + b.segments[1].stops.length;
  return stopsFirst - stopsSecond;
}

export default function sortingTickets(sort, tickets) {
  const sortedTickets = [...tickets];

  switch (sort) {
    case SORTING.CHEAPEST:
      return sortedTickets.sort(compareCheapest);
    case SORTING.FASTEST:
      return sortedTickets.sort(compareFastest);
    case SORTING.OPTIMAL:
      return sortedTickets.sort(compareOptimal);
    default:
      return sortedTickets;
  }
}
