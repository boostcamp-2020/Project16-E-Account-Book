import { Context } from 'koa';
import * as response from '../utils/response';
import 'dotenv/config';
import * as Service from './service';

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
    response.fail(ctx, 403, 'You are not authorized to this account book');
    return;
  }

  const transactionList = await Service.getDailyTransactions(bookId, date);

  response.success(ctx, transactionList);
};

export const createTransaction = async (ctx: any) => {
  const { accountbookId, userId, categoryId, paymentId, date, title, amount } = ctx.request.body;
  const transaction = [accountbookId, userId, categoryId, paymentId, date, title, amount];
  const result = await Service.createTransaction(transaction);
  response.success(ctx, result);
};
