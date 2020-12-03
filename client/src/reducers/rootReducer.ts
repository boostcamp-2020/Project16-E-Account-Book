import { combineReducers } from 'redux';
import modal from './modal';
import date from './date';

const rootReducer = combineReducers({
  modal,
  date,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
