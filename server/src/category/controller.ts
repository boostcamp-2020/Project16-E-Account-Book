import { Context } from 'koa';
import * as response from '../utils/response';
import 'dotenv/config';
import * as Service from './service';

export const getIncomeCategory = async (ctx: Context) => {
  const result = await Service.getIncomeCategory();
  response.success(ctx, result);
};

export const getExpenditureCategory = async (ctx: Context) => {
  const result = await Service.getExpenditureCategory();
  response.success(ctx, result);
};
