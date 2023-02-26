import { FILTERS } from '../store/constants';

function filterCountTransfers(transfersCount) {
  return function filterTicket(ticket) {
    return (
      ticket.segments[0].stops.length === transfersCount ||
      ticket.segments[1].stops.length === transfersCount
    );
  };
}

export default function filterTickets(filters, tickets) {
  const filteredTickets = [];

  if (filters.includes(FILTERS.ALL)) {
    return tickets;
  }

  if (filters.includes(FILTERS.WITHOUT_TRANSFERS)) {
    filteredTickets.push(...tickets.filter(filterCountTransfers(0)));
  }

  if (filters.includes(FILTERS.ONE_TRANSFER)) {
    filteredTickets.push(...tickets.filter(filterCountTransfers(1)));
  }

  if (filters.includes(FILTERS.TWO_TRANSFERS)) {
    filteredTickets.push(...tickets.filter(filterCountTransfers(2)));
  }

  if (filters.includes(FILTERS.THREE_TRANSFERS)) {
    filteredTickets.push(...tickets.filter(filterCountTransfers(3)));
  }

  return filteredTickets;
}
