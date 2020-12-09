import 'dotenv/config';
import sql from '../model/db';
import query from '../model/query';
import { getCategoryPercentData } from '../utils/accountbook';

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

export const getIncomeCategory = async (bookId: number, year: number, month: number) => {
  const result = await sql(query.READ_PRIVATE_INCOME_CATEGORY, [bookId, year, month]);
  const percentResult = getCategoryPercentData(result);
  return percentResult;
};

export const getExpenditureCategory = async (bookId: number, year: number, month: number) => {
  const result = await sql(query.READ_PRIVATE_EXPENDITURE_CATEGORY, [bookId, year, month]);
  const percentResult = getCategoryPercentData(result);
  return percentResult;
};
