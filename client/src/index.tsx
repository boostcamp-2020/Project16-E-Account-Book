import React from 'react';
import ReactDOM from 'react-dom';
import initStore from '@store/index';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = initStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
