import { combineReducers } from 'redux';
import modal from './modal';

const rootReducer = combineReducers({
  modal,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
