import React from 'react';
import CenterContent from '@molecules/CenterContent';
import NewTransactionButton from '@organisms/NewTransactionButton';

const CalendarPage: React.FC = () => {
  return (
    <CenterContent>
      <NewTransactionButton />
    </CenterContent>
  );
};

export default CalendarPage;
