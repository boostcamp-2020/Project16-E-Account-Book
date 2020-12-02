import React from 'react';
import GlobalStyle from '../src/shared/global';
import initStore from '@store/index';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

const store = initStore();

export const decorators = [
  (Story) => (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Router>
          <Story />
        </Router>
      </Provider>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
