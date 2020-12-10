import { ActionProps } from '@interfaces/action';

export const GET_TRANSACTION = 'transaction/GET_TRANSACTION' as const;

export const getTransaction = (transactionList: [], selectDate: number): ActionProps => ({
  type: GET_TRANSACTION,
  payload: { transactionList, selectDate },
});
