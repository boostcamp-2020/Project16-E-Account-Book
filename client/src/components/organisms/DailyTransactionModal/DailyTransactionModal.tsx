import React from 'react';
import Modal from '@molecules/Modal';
import styled from 'styled-components';
import TransactionTotal from '@molecules/TransactionTotal';
import TransactionInfo from '@molecules/TransactionInfo';

interface props {
  data: any;
  title: string;
}

const ScrollDiv = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 80%;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const DailyTransactionModal: React.FC<props> = ({ data, title }: props) => {
  const transactionList = data.map((curr) => {
    return <TransactionInfo data={curr} />;
  });

  let expend = 0;
  let income = 0;

  data.forEach((transaction) => {
    transaction.payment === null ? (income += transaction.amount) : (expend += transaction.amount);
  });

  return (
    <Modal title={title}>
      <TransactionTotal data={{ expenditure: expend, income }} />
      <ScrollDiv>{transactionList}</ScrollDiv>
    </Modal>
  );
};

export default DailyTransactionModal;
