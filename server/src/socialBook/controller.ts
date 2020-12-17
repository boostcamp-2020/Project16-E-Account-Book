/* eslint-disable no-await-in-loop */
import { Context } from 'koa';
import * as response from '../utils/response';
import message from '../utils/message';
import 'dotenv/config';
import * as Service from './service';
import { getPastMonthList, getPastWeekList } from '../utils/date';
import { TransactionList } from '../interface/transaction';

export const getSocialBook = async (ctx: Context) => {
  const userId = ctx.userData.uid;
  const { bookId } = ctx.params;
  const socialBookResult = await Service.getSocialBook(userId, bookId);

  if (socialBookResult.length === 0) {
    response.fail(ctx, 403, message.NO_SOCIAL_AUTHORIZED);
    return;
  }

  const [result] = await Service.getUserImages(socialBookResult);
  response.success(ctx, result);
};

export const updateSocialBook = async (ctx: any) => {
  const masterId = ctx.userData.uid;
  const { bookId } = ctx.params;
  const { name, description, color } = ctx.request.body;

  const result = await Service.updateSocialBook(masterId, bookId, name, description, color);
  if (result.affectedRows === 0) {
    response.fail(ctx, 403, message.NO_SOCIAL_AUTHORIZED);
    return;
  }
  response.success(ctx, bookId);
};

export const getSocialBooks = async (ctx: Context) => {
  const userId = ctx.userData.uid;
  const socialBookResult = await Service.getSocialBooks(userId);
  if (!socialBookResult) {
    response.success(ctx, []);
  } else {
    const result = await Service.getUserImages(socialBookResult);
    response.success(ctx, result);
  }
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

export const getPastFiveWeekStatistic = async (ctx: any) => {
  const { bookId } = ctx.params;
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

export const createAccountbook = async (ctx: any) => {
  const { name, description, color } = ctx.request.body;
  const userId = ctx.userData.uid;
  const AccountbookResult = await Service.createAccountbook(name, description, color, userId);

  const AccountbookUserResult = await Service.createAccountbookUser(userId, AccountbookResult, 0);

  const result = { AccountbookResult, AccountbookUserResult };
  response.success(ctx, result);
};

export const createAccountbookUser = async (ctx: any) => {
  const { userId, accountbookId, state } = ctx.request.body;

  const result = await Service.createAccountbookUser(userId, accountbookId, state);

  response.success(ctx, result);
};

export const getTransactionList = async (ctx: any) => {
  const { bookId, year, month } = ctx.params;
  const userId = ctx.userData.uid;

  const bookIdList = await Service.getBelongSocialBookList(userId);

  if (!bookIdList.includes(Number(bookId))) {
    response.fail(ctx, 403, message.NO_SOCIAL_AUTHORIZED);
    return;
  }

  const searchInfo = [bookId, year, month];
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

export const inviteAccountbookUser = async (ctx: any) => {
  const { userId, accountbookId } = ctx.request.body;
  const result = await Service.inviteAccountbookUser(userId, accountbookId);
  response.success(ctx, result);
};

export const getInvitation = async (ctx: any) => {
  const userId = ctx.userData.uid;

  const result = await Service.getInvitation(userId);

  response.success(ctx, result);
};

export const patchInvitation = async (ctx: any) => {
  const userId = ctx.userData.uid;
  const { id } = ctx.params;
  const { accept } = ctx.request.body;

  await Service.patchInvitation(userId, id, accept);

  response.success(ctx, id);
};

export const deleteInvitation = async (ctx: any) => {
  const userId = ctx.userData.uid;
  const { id } = ctx.params;
  const master = await Service.getInvitationMasterId(id);

  if (master === undefined) {
    response.fail(ctx, 403, message.NO_SOCIAL_INVITATION);
    return;
  }

  if (master.id !== userId) {
    response.fail(ctx, 403, message.NO_SOCIAL_AUTHORIZED);
    return;
  }

  const result = await Service.deleteInvitation(id);
  if (result.affectedRows === 0) {
    response.fail(ctx, 403, message.NO_INVITATION_WAITING_STATE);
    return;
  }

  response.success(ctx, id);
};

export const getTrendStatisticIncome = async (ctx: any) => {
  const { bookId, year, month } = ctx.params;
  const result = await Service.getTrendIncome(bookId, year, month);
  response.success(ctx, result);
};

export const getTrendStatisticExpenditure = async (ctx: any) => {
  const { bookId, year, month } = ctx.params;
  const result = await Service.getTrendExpenditure(bookId, year, month);
  response.success(ctx, result);
};

export const getInvitationWaitingUsers = async (ctx: any) => {
  const { bookId } = ctx.params;
  const result = await Service.getInvitationWaitingUsers(bookId);
  response.success(ctx, result);
};
