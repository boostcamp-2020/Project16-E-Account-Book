import { ActionProps } from '@interfaces/action';

export const GET_TRANSACTION = 'transaction/GET_TRANSACTION' as const;

export const getTransaction = (transactionList: []): ActionProps => ({
  type: GET_TRANSACTION,
  payload: transactionList,
});
