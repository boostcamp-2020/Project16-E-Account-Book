import React from 'react';
import CreditCardEditModal from './CreditCardEditModal';

export default {
  title: 'Organisms/CreditCardEditModal',
  component: CreditCardEditModal,
};

export const creditCardEditModal = (): JSX.Element => {
  return <CreditCardEditModal />;
};

creditCardEditModal.story = {
  name: 'CreditCardEditModal',
};
