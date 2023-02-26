import { GET_PACK_OF_TICKETS } from '../types';
import aviasalesService from '../../services';

import setStopGettingTickets from './setStopGettingTickets';

export default function getPackOfTickets(id) {
  return async (dispatch, getState) => {
    const { stopLoading } = getState();

    if (stopLoading) return;

    try {
      const packOfTickets = await aviasalesService.getPackOfTickets(id);
      const { tickets, stop } = packOfTickets;

      if (stop) {
        dispatch(setStopGettingTickets(stop));

        return;
      }

      dispatch({
        type: GET_PACK_OF_TICKETS,
        payload: tickets,
      });

      dispatch(getPackOfTickets(id));
    } catch {
      dispatch(getPackOfTickets(id));
    }
  };
}
