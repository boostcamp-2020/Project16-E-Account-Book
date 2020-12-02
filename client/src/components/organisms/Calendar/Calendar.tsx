import React from 'react';
import styled from 'styled-components';
import firstDayOfWeek from '@utils/fristDayOfWeek';

const Calendar = styled.div`
  border: 1px solid red;
`;
const calendar: React.FC = () => {
  const date = firstDayOfWeek('2020-12');
  return <Calendar>{`${date}`}</Calendar>;
};

export default calendar;
