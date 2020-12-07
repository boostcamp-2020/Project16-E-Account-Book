import { combineReducers } from 'redux';
import modal from './modal';
import date from './date';
import transaction from './transaction';

const rootReducer = combineReducers({
  modal,
  date,
  transaction,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
