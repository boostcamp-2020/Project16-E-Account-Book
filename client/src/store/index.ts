import { createStore } from 'redux';
import rootReducer from '@reducers/rootReducer';

const configureStore: any = (initialState = {}) => {
  const store = createStore(rootReducer, initialState);
  return store;
};

export default configureStore;
