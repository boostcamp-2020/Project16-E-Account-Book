import React, { useEffect } from 'react';
import NewTransactionButton from '@organisms/NewTransactionButton';
import Calendar from '@organisms/Calendar';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@reducers/rootReducer';
import { getTransaction } from '@actions/transaction/type';
import { getAxiosData } from '@utils/axios';
import * as API from '@utils/api';

const CalendarPage: React.FC = () => {
  const year = useSelector((state: RootState) => state.date.year);
  const month = useSelector((state: RootState) => state.date.month);
  const transactionList = useSelector((state: RootState) => state.transaction.transactionList);
  const accountbookType = useSelector((state: RootState) => state.accountbook.type);
  const accountbookId = useSelector((state: RootState) => state.accountbook.socialId);
  const dateData = `${year}-${month}`;
  const dispatch = useDispatch();
  const changeTransaction = (newList: any) => {
    dispatch(getTransaction(newList));
  };
  useEffect(() => {
    // eslint-disable-next-line consistent-return
    const getTransactionList = async (type: string): Promise<any> => {
      let result;
      switch (type) {
        case 'PRIVATE':
          result = await getAxiosData(API.GET_TRANSACTION_PRIVATE_LIST(year, month));
          return result;
        case 'SOCIAL':
          result = await getAxiosData(API.GET_TRANSACTION_SOCIAL_LIST(accountbookId, year, month));
          return result;
        default:
          break;
      }
    };
    (async () => {
      const { data } = await getTransactionList(accountbookType);
      changeTransaction(data);
    })();
  }, [dateData]);
  return (
    <>
      <Calendar dateData={dateData} monthData={transactionList} />
      <NewTransactionButton />
    </>
  );
};

export default CalendarPage;
