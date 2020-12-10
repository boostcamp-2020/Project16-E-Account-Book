import React from 'react';
import styled from 'styled-components';
import TransactionInfo from '@molecules/TransactionInfo';
import myColor from '@theme/color';

interface Props {
  data: dataProps;
}

interface dataProps {
  id: number;
  date: string;
  inmoney: number;
  exmoney: number;
  category: string;
  title: string;
  payment: any;
}

const DailyTransaction = styled.div`
  border: 1px solid ${myColor.calendar.border};
  border-radius: 5px;
  &:hover {
    background-color: ${myColor.calendar.main};
    transform: scale(1.2);
  }
`;
const dailyTransaction: React.FC<Props> = ({ data }: Props) => {
  let money = 0;
  if (data.payment) {
    money = data.exmoney;
  } else {
    money = data.inmoney;
  }
  const reformData = {
    category: data.category,
    title: data.title,
    amount: money,
    payment: data.payment,
  };
  return (
    <DailyTransaction>
      <TransactionInfo data={reformData} />
    </DailyTransaction>
  );
};

export default dailyTransaction;
