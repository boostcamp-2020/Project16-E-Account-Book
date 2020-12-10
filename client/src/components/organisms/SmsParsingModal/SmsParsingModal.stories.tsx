import React from 'react';
import SmsParsingModal from './SmsParsingModal';

export default {
  title: 'Organisms/SmsParsingModal',
  component: SmsParsingModal,
};

export const smsParsingModal = (): JSX.Element => {
  return <SmsParsingModal setData={() => undefined} />;
};

smsParsingModal.story = {
  name: 'SmsParsingModal',
};
