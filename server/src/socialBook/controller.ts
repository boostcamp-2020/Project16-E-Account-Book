/* eslint-disable no-await-in-loop */
import { Context } from 'koa';
import * as response from '../utils/response';
import message from '../utils/message';
import 'dotenv/config';
import * as Service from './service';
import { getPastMonthList } from '../utils/date';

export const getSocialBooks = async (ctx: Context) => {
  const userId = ctx.userData.uid;
  const socialBookResult = await Service.getSocialBooks(userId);
  const result = await Service.getUserImages(socialBookResult);
  response.success(ctx, result);
};

export const getSocialBooksMaster = async (ctx: Context) => {
  const userId = ctx.userData.uid;
  const socialBookResult = await Service.getSocialBooksMaster(userId);
  const result = await Service.getUserImages(socialBookResult);
  response.success(ctx, result);
};

export const getDailyTransaction = async (ctx: Context) => {
  const { bookId, date } = ctx.params;
  const userId = ctx.userData.uid;

  const bookIdList = await Service.getBelongSocialBookList(userId);

  if (!bookIdList.includes(Number(bookId))) {
    response.fail(ctx, 403, message.NO_SOCIAL_AUTHORIZED);
    return;
  }

  const transactionList = await Service.getDailyTransactions(bookId, date);

  response.success(ctx, transactionList);
};

export const createTransaction = async (ctx: any) => {
  const userId = ctx.userData.uid;
  const { accountbookId, categoryId, paymentId, date, title, amount } = ctx.request.body;

  const bookIdList = await Service.getBelongSocialBookList(userId);

  if (!bookIdList.includes(Number(accountbookId))) {
    response.fail(ctx, 403, message.NO_SOCIAL_AUTHORIZED);
    return;
  }

  const transaction = [accountbookId, userId, categoryId, paymentId, date, title, amount];
  const result = await Service.createTransaction(transaction);
  response.success(ctx, result);
};

export const getCategoryStatistic = async (ctx: any) => {
  const { bookId, year, month } = ctx.params;
  const userId = ctx.userData.uid;

  const bookIdList = await Service.getBelongSocialBookList(userId);

  if (!bookIdList.includes(Number(bookId))) {
    response.fail(ctx, 403, message.NO_SOCIAL_AUTHORIZED);
    return;
  }

  const income = await Service.getIncomeCategory(bookId, year, month);
  const expenditure = await Service.getExpenditureCategory(bookId, year, month);

  const result = {
    income,
    expenditure,
  };
  response.success(ctx, result);
};

export const getPastFourMonthStatistics = async (ctx: any) => {
  const { bookId } = ctx.params;
  const dateList = getPastMonthList(4);
  const result: number[][] = [];

  for (const date of dateList) {
    const startDate = date[0];
    const endDate = date[1];

    const expend = await Service.getMonthlyStatisticsExpend(bookId, startDate, endDate);
    const income = await Service.getMonthlyStatisticsIncome(bookId, startDate, endDate);

    result.push([Number(income), Number(expend)]);
  }

  response.success(ctx, result);
};
