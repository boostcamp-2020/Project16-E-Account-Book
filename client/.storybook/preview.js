import React from 'react';
import GlobalStyle from '../src/shared/global';
import initStore from '@store/index';
import { Provider } from 'react-redux';

const store = initStore();

export const decorators = [
  (Story) => (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Story />
      </Provider>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
