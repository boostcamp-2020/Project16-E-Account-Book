import { GET_TRANSACTION, getTransaction } from '@actions/transaction/type';

type TransactionAction = ReturnType<typeof getTransaction>;

type TransactionState = {
  transactionList: [];
  selectDate: number;
};

const initialState: TransactionState = {
  transactionList: [],
  selectDate: 0,
};

const transaction = (
  state: TransactionState = initialState,
  action: TransactionAction,
): TransactionState => {
  switch (action.type) {
    case GET_TRANSACTION:
      return {
        transactionList: action.payload.transactionList,
        selectDate: action.payload.selectDate,
      };
    default:
      return state;
  }
};

export default transaction;
