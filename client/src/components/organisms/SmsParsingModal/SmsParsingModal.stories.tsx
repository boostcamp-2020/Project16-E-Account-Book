import React from 'react';
import SmsParsingModal from './SmsParsingModal';

export default {
  title: 'Organisms/SmsParsingModal',
  component: SmsParsingModal,
};

export const smsParsingModal = (): JSX.Element => {
  return <SmsParsingModal />;
};

smsParsingModal.story = {
  name: 'SmsParsingModal',
};
