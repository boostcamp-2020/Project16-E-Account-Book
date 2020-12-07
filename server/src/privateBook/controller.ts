import * as response from '../utils/response';
import 'dotenv/config';
import * as Service from './service';

export const createTransaction = async (ctx: any) => {
  const { accountbookId, categoryId, paymentId, date, title, amount } = ctx.request.body;
  const transaction = [accountbookId, categoryId, paymentId, date, title, amount];
  const result = await Service.createTransaction(transaction);
  response.success(ctx, result);
};

export const getTransactionList = async (ctx: any) => {
  const { accountbookId, year, month } = ctx.params;

  const searchInfo = [accountbookId, year, month];
  const result = await Service.getTransactionList(searchInfo);
  response.success(ctx, result);
};
