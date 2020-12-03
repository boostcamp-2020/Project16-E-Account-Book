import React from 'react';
import styled from 'styled-components';
import firstDayOfWeek from '@utils/firstDayOfWeek';
// import isLeafYear from '@utils/isLeapYear';
import numberOfMonth from '@utils/numberOfMonth';

const Calendar = styled.div`
  border: 1px solid red;
`;
const calendar: React.FC = () => {
  const day = firstDayOfWeek('2020-2');
  const days = numberOfMonth('2020-2');
  // const leafyear = isLeafYear(2020);
  return <Calendar>{`${day}${days}`}</Calendar>;
};

export default calendar;
