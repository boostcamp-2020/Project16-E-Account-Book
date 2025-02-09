import React from 'react';
import Modal from '@molecules/Modal';
import styled from 'styled-components';
import TransactionTotal from '@molecules/TransactionTotal';
import TransactionInfo from '@molecules/TransactionInfo';
import myColor from '@theme/color';
import { useSelector } from 'react-redux';
import { RootState } from '@reducers/rootReducer';
import { useHistory } from 'react-router-dom';

interface props {
  date: number;
  month: string;
}

const ScrollDiv = styled.div`
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 80%;
`;

const StyledLink = styled.div`
  text-decoration: none;
  &:focus,
  &:hover {
    background-color: ${myColor.calendar.main};
  }
  ,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const DailyTransactionModal: React.FC<props> = ({ month, date }: props) => {
  const allTransactionList = useSelector((state: RootState) => state.transaction.transactionList);
  const dayString = `${month}-${String(date)}`;
  const dateArray = ['일', '월', '화', '수', '목', '금', '토'];
  const title = `${String(date)} 일   (${dateArray[new Date(dayString).getDay()]})`;
  const dailyData: Array<{
    id: number;
    category: string;
    payment: string;
    title: string;
    amount: number;
    date: string;
  }> = [];
  allTransactionList.forEach((e: any) => {
    if (new Date(e.date).getDate() === date) {
      dailyData.push({
        id: e.id,
        category: e.category,
        payment: e.payment,
        title: e.title,
        amount: e.inmoney + e.exmoney,
        date: e.date,
      });
    }
  });

  const history = useHistory();

  const moveToEditPage = (state) => {
    history.push('/accountbook/transaction/edit', state);
  };

  const transactionList = dailyData.map((curr) => {
    return (
      <StyledLink
        onClick={() => {
          moveToEditPage(curr);
        }}
      >
        <TransactionInfo data={curr} />
      </StyledLink>
    );
  });

  let expend = 0;
  let income = 0;

  dailyData.forEach((transaction) => {
    // eslint-disable-next-line no-unused-expressions
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
