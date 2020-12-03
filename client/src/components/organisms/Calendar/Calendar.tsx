import React from 'react';
import styled from 'styled-components';
import firstDayOfWeek from '@utils/firstDayOfWeek';
import isLeafYear from '@utils/isLeapYear';

const Calendar = styled.div`
  border: 1px solid red;
`;
const calendar: React.FC = () => {
  const date = firstDayOfWeek('2020-12');
  const leafyear = isLeafYear(2020);
  return <Calendar>{`${date}${leafyear}`}</Calendar>;
};

export default calendar;
