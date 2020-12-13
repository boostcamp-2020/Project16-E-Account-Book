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

export const getWeeksIncome = async (bookId: number, startDate: string, endDate: string) => {
  const result = await sql(query.READ_PRIVATE_WEEKLY_STATISTICS_INCOME, [
    bookId,
    startDate,
    `${endDate} 23:59:59`,
  ]);
  return result[0]['SUM(amount)'];
};

export const getMonthCategoryData = async (bookId: number) => {
  const result = await sql(query.READ_PRIVATE_MONTH_TRANSACTION, [bookId]);
  return result;
};

export const getMonthIncomeData = async (bookId: number) => {
  const [result] = await sql(query.READ_PRIVATE_MONTH_INCOME, [bookId]);
  return result.income;
};

export const getMonthExpenditureData = async (bookId: number) => {
  const [result] = await sql(query.READ_PRIVATE_MONTH_EXPENDITURE, [bookId]);
  return result.expenditure;
};

export const getMonthlyStatisticsExpend = async (
  bookId: number,
  startDate: string,
  endDate: string,
) => {
  const result = await sql(query.READ_PRIVATE_MONTHLY_STATISTICS_EXPEND, [
    bookId,
    startDate,
    endDate,
  ]);
  return result[0]['SUM(amount)'];
};

export const getWeeksExpend = async (bookId: number, startDate: string, endDate: string) => {
  const result = await sql(query.READ_PRIVATE_WEEKLY_STATISTICS_EXPEND, [
    bookId,
    startDate,
    `${endDate} 23:59:59`,
  ]);
  return result[0]['SUM(amount)'];
};

export const getMonthlyStatisticsIncome = async (
  bookId: number,
  startDate: string,
  endDate: string,
) => {
  const result = await sql(query.READ_PRIVATE_MONTHLY_STATISTICS_INCOME, [
    bookId,
    startDate,
    endDate,
  ]);
  return result[0]['SUM(amount)'];
};

export const updateTransaction = async (transaction: (string | number)[]) => {
  const result = await sql(query.UPDATE_PRIVATE_TRANSACTION, transaction);
  return result;
};
