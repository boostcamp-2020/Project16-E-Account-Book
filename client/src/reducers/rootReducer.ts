import { combineReducers } from 'redux';
import user from './user';
import modal from './modal';
import date from './date';
import accountbook from './accountbook';
import category from './category';

const rootReducer = combineReducers({
  user,
  modal,
  date,
  accountbook,
  category,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
