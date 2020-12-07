import { combineReducers } from 'redux';
import modal from './modal';
import date from './date';
import accountbook from './accountbook';

const rootReducer = combineReducers({
  modal,
  date,
  accountbook,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
