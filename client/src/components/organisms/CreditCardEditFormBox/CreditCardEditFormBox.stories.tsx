import React from 'react';
import CreditCardEditFormBox from './CreditCardEditFormBox';

export default {
  title: 'Organisms/CreditCardEditFormBox',
  component: CreditCardEditFormBox,
};

export const creditCardEditFormBox = (): JSX.Element => {
  return <CreditCardEditFormBox />;
};

creditCardEditFormBox.story = {
  name: 'CreditCardEditFormBox',
};
