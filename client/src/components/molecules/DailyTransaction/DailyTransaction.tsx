import React from 'react';
import styled from 'styled-components';
import TransactionInfo from '@molecules/TransactionInfo';

interface Props {
  data: dataProps;
}

interface dataProps {
  category: string;
  title: string;
  amount: number;
  payment: any;
}

const DailyTransaction = styled.div`
  border: 0;
`;

const dailyTransaction: React.FC<Props> = ({ data }: Props) => {
  return (
    <DailyTransaction>
      <TransactionInfo data={data} />
    </DailyTransaction>
  );
};

export default dailyTransaction;
