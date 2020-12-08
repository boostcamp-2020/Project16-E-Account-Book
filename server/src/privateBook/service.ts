import 'dotenv/config';
import sql from '../model/db';
import query from '../model/query';

export const createTransaction = async (transaction: (string | number)[]) => {
  const result = await sql(query.CREATE_PRIVATE_TRANSACTION, transaction);
  return result.insertId;
};

export const getTransactionList = async (searchInfo: (string | number)[]) => {
  const result = await sql(query.GET_PRIVATE_TRANSACTIONLIST, searchInfo);
  return result;
};

export const getAccountBookId = async (userInfo: string) => {
  const [result] = await sql(query.GET_PRIVATE_BOOK_ID, [userInfo]);
  return result.id;
};
