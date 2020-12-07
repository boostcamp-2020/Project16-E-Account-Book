import { Context } from 'koa';
import * as response from '../utils/response';
import 'dotenv/config';
import * as Service from './service';

export const createTransaction = async (ctx: any) => {
  const { accountbookId, categoryId, paymentId, date, title, amount } = ctx.request.body;
  const transaction = [accountbookId, categoryId, paymentId, date, title, amount];
  const result = await Service.createTransaction(transaction);
  response.success(ctx, result);
};

export default createTransaction;
