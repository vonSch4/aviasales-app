import { SET_STOP_GETTING_TICKETS } from '../types';

export default function setStopGettingTickets(stop) {
  return {
    type: SET_STOP_GETTING_TICKETS,
    payload: stop,
  };
}
