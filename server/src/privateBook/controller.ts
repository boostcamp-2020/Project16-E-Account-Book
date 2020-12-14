/* eslint-disable no-await-in-loop */
import * as response from '../utils/response';
import 'dotenv/config';
import * as Service from './service';
import { TransactionList } from '../interface/transaction';
import { getPastWeekList, getPastMonthList } from '../utils/date';
import { makeAnalysisData } from '../utils/makeAnalysisData';

export const createTransaction = async (ctx: any) => {
  const userId = ctx.userData.uid;
  const accountbookId = await Service.getAccountBookId(userId);
  const { categoryId, paymentId, date, title, amount } = ctx.request.body;
  const transaction = [accountbookId, categoryId, paymentId, date, title, amount];
  const result = await Service.createTransaction(transaction);
  response.success(ctx, result);
};

export const getTransactionList = async (ctx: any) => {
  const userId = ctx.userData.uid;
  const accountbookId = await Service.getAccountBookId(userId);
  const { year, month } = ctx.params;

  const searchInfo = [accountbookId, year, month];
  let result = await Service.getTransactionList(searchInfo);
  result = result.map((eachData: TransactionList) => {
    const inmoney = eachData.assortment === '수입' ? eachData.amount : 0;
    const exmoney = eachData.assortment === '지출' ? eachData.amount : 0;
    return {
      id: eachData.id,
      date: eachData.date,
      inmoney,
      exmoney,
      payment: eachData.name,
      category: eachData.category,
      title: eachData.title,
    };
  });
  response.success(ctx, result);
};

export const getCategoryStatistic = async (ctx: any) => {
  const { year, month } = ctx.params;
  const userId = ctx.userData.uid;
  const bookId = await Service.getAccountBookId(userId);

  const income = await Service.getIncomeCategory(bookId, year, month);
  const expenditure = await Service.getExpenditureCategory(bookId, year, month);

  const result = {
    income,
    expenditure,
  };
  response.success(ctx, result);
};

export const getPastFiveWeekStatistic = async (ctx: any) => {
  const userId = ctx.userData.uid;
  const bookId = await Service.getAccountBookId(userId);
  const dateList = getPastWeekList(5);
  const startDate = 0;
  const endDate = 1;
  const income = [];
  const expend = [];

  for (let index = 0; index < dateList.length; index += 1) {
    const incomeData = Number(
      await Service.getWeeksIncome(bookId, dateList[index][startDate], dateList[index][endDate]),
    );
    const expendData = Number(
      await Service.getWeeksExpend(bookId, dateList[index][startDate], dateList[index][endDate]),
    );

    income.push(incomeData);
    expend.push(expendData);
  }

  const result = {
    income,
    expend,
    dateList,
  };
  response.success(ctx, result);
};

export const getMonthAnalysis = async (ctx: any) => {
  const userId = ctx.userData.uid;
  const bookId = await Service.getAccountBookId(userId);
  const category = await Service.getMonthCategoryData(bookId);
  const incomeResult = await Service.getMonthIncomeData(bookId);
  const expendResult = await Service.getMonthExpenditureData(bookId);

  const income = incomeResult ? Number(incomeResult) : 0;
  const expend = expendResult ? Number(expendResult) : 0;
  const data = makeAnalysisData(category, income, expend);
  response.success(ctx, data);
};

export const getPastFourMonthStatistics = async (ctx: any) => {
  const userId = ctx.userData.uid;
  const accountbookId = await Service.getAccountBookId(userId);

  const dateList = getPastMonthList(4);
  const result: number[][] = [];

  for (const date of dateList) {
    const startDate = date[0];
    const endDate = date[1];

    const expend = await Service.getMonthlyStatisticsExpend(accountbookId, startDate, endDate);
    const income = await Service.getMonthlyStatisticsIncome(accountbookId, startDate, endDate);

    result.push([Number(income), Number(expend)]);
  }

  response.success(ctx, result);
};

export const getTrendStatisticIncome = async (ctx: any) => {
  const { year, month } = ctx.params;
  const userId = ctx.userData.uid;
  const accountbookId = await Service.getAccountBookId(userId);
  const result = await Service.getTrendIncome(accountbookId, year, month);
  response.success(ctx, result);
};

export const getTrendStatisticExpenditure = async (ctx: any) => {
  const { year, month } = ctx.params;
  const userId = ctx.userData.uid;
  const accountbookId = await Service.getAccountBookId(userId);
  const result = await Service.getTrendExpenditure(accountbookId, year, month);
  response.success(ctx, result);
};

export const updateTransaction = async (ctx: any) => {
  const { id, categoryId, paymentId, date, title, amount } = ctx.request.body;
  const transaction = [categoryId, paymentId, date, title, amount, id];
  await Service.updateTransaction(transaction);
  response.success(ctx, id);
};

export const deleteTransaction = async (ctx: any) => {
  const { id } = ctx.params;
  await Service.deleteTransaction(id);
  response.success(ctx, id);
};
