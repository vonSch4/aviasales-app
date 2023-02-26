import add from 'date-fns/add';
import format from 'date-fns/format';

export default function formatDateToTime(departureDate, duration) {
  const formatDepartureDate = new Date(departureDate);
  const formatArrivalDate = add(formatDepartureDate, {
    minutes: duration,
  });

  const departureTime = `${format(formatDepartureDate, 'HH')}:${format(
    formatDepartureDate,
    'mm'
  )}`;

  const arrivalTime = `${format(formatArrivalDate, 'HH')}:${format(
    formatArrivalDate,
    'mm'
  )}`;

  return `${departureTime} - ${arrivalTime}`;
}
