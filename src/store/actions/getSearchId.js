import { GET_SEARCH_ID } from '../types';
import aviasalesService from '../../services/AviasalesService';

import getPackOfTickets from './getPackOfTickets';

export default function getSearchId() {
  return async (dispatch, getState) => {
    const id = await aviasalesService.getSearchId();
    const { searchId } = getState();

    if (searchId) return;

    dispatch({
      type: GET_SEARCH_ID,
      payload: id,
    });

    dispatch(getPackOfTickets(id));
  };
}
