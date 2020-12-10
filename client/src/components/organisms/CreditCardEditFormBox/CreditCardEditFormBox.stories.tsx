import React from 'react';
import CreditCardEditFormBox from './CreditCardEditFormBox';

export default {
  title: 'Organisms/CreditCardEditFormBox',
  component: CreditCardEditFormBox,
};

const testFunc = (data: any) => {
  return data;
};

export const creditCardEditFormBox = (): JSX.Element => {
  return <CreditCardEditFormBox buttonEvent={() => testFunc([1, 2, 3])} />;
};

creditCardEditFormBox.story = {
  name: 'CreditCardEditFormBox',
};
