import { combineReducers } from 'redux';

import filterReducer from './filterReducer';
import sortingReducer from './sortingReducer';
import searchIdReducer from './searchIdReducer';
import ticketsReducer from './ticketsReducer';
import stopLoadingReducer from './stopLoadingReducer';
import ticketsCountReducer from './ticketsCountReducer';

const reducer = combineReducers({
  filters: filterReducer,
  sorting: sortingReducer,
  searchId: searchIdReducer,
  tickets: ticketsReducer,
  stopLoading: stopLoadingReducer,
  ticketsCount: ticketsCountReducer,
});

export default reducer;
