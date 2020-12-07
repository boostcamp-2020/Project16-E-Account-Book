import React, { useEffect } from 'react';
import NewTransactionButton from '@organisms/NewTransactionButton';
import Calendar from '@organisms/Calendar';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@reducers/rootReducer';
import { getTransaction } from '@actions/transaction/type';
// import axios from 'axios';
// import * as API from '@utils/api';

const CalendarPage: React.FC = () => {
  const year = useSelector((state: RootState) => state.date.year);
  const month = useSelector((state: RootState) => state.date.month);
  const transactionList = useSelector((state: RootState) => state.transaction.transactionList);
  const dateData = `${year}-${month}`;
  const dispatch = useDispatch();
  const changeTransaction = (newList: any) => {
    dispatch(getTransaction(newList));
  };
  useEffect(() => {
    // const getTransactionList = async () => {
    //   if (account === 'social') {
    //     const { data } = await axios.post(API.GET_TRANSACTION_SOCIAL_LIST, {
    //       accountbook_id: 1,
    //       year,
    //       month,
    //     });
    //     return data;
    //   }
    // };
    // (async () => {
    //   const { data } = await getTransactionList();
    //   changeTransaction(data);
    // })();
    changeTransaction([
      {
        id: 1,
        date: '2020-12-02T13:10:44.000Z',
        inmoney: 122,
        exmoney: 0,
        payment: '카카오페이',
        category: '용돈',
        title: '아빠',
      },
      {
        id: 2,
        date: '2020-12-03T13:10:44.000Z',
        inmoney: 0,
        exmoney: 123,
        payment: '신한카드',
        category: '마트',
        title: '소고기',
      },
    ]);
  }, [dateData]);
  return (
    <>
      <Calendar dateData={dateData} monthData={transactionList} />
      <NewTransactionButton />
    </>
  );
};

export default CalendarPage;
