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

export const createTransaction = async (ctx: any) => {
  const { accountbookId, userId, categoryId, paymentId, date, title, amount } = ctx.request.body;
  const transaction = [accountbookId, userId, categoryId, paymentId, date, title, amount];
  console.log(transaction);
  const result = await Service.createTransaction(transaction);
  console.log(result);
  response.success(ctx, result);
};
