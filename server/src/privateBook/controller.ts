/* eslint-disable no-await-in-loop */
import * as response from '../utils/response';
import 'dotenv/config';
import * as Service from './service';
import { TransactionList } from '../interface/transaction';
import { getPastWeekList } from '../utils/date';

export const createTransaction = async (ctx: any) => {
  const { accountbookId, categoryId, paymentId, date, title, amount } = ctx.request.body;
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
    income.push(
      Number(
        await Service.getWeeksIncome(bookId, dateList[index][startDate], dateList[index][endDate]),
      ),
    );
    expend.push(
      Number(
        await Service.getWeeksExpend(bookId, dateList[index][startDate], dateList[index][endDate]),
      ),
    );
  }

  const result = {
    income,
    expend,
    dateList,
  };

  response.success(ctx, result);
};
