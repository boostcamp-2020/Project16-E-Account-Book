import { GET_TRANSACTION, getTransaction } from '@actions/transaction/type';

type TransactionAction = ReturnType<typeof getTransaction>;

type TransactionState = {
  transactionList: [];
};

const initialState: TransactionState = {
  transactionList: [],
};

const transaction = (
  state: TransactionState = initialState,
  action: TransactionAction,
): TransactionState => {
  switch (action.type) {
    case GET_TRANSACTION:
      return { transactionList: action.payload };
    default:
      return state;
  }
};

export default transaction;
