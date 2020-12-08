import React from 'react';
import styled from 'styled-components';
import TransactionInfo from '@molecules/TransactionInfo';

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
  border: 0;
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
