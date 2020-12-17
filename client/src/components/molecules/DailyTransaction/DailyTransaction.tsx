import React from 'react';
import styled from 'styled-components';
import TransactionInfo from '@molecules/TransactionInfo';
import myColor from '@theme/color';
import { useHistory } from 'react-router-dom';

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
  width: 100%;
  box-sizing: border-box;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  &:hover {
    background-color: ${myColor.calendar.main};
    transform: scale(1.2);
  }
`;

const dailyTransaction: React.FC<Props> = ({ data }: Props) => {
  const history = useHistory();

  let money = 0;
  if (data.payment) {
    money = data.exmoney;
  } else {
    money = data.inmoney;
  }
  const reformData = {
    id: data.id,
    date: data.date,
    category: data.category,
    title: data.title,
    amount: money,
    payment: data.payment,
  };
  const moveToEditPage = () => {
    history.push('/accountbook/transaction/edit', reformData);
  };
  return (
    <DailyTransaction onClick={moveToEditPage}>
      <TransactionInfo data={reformData} />
    </DailyTransaction>
  );
};

export default dailyTransaction;
