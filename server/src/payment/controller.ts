import { Context } from 'koa';
import * as response from '../utils/response';
import 'dotenv/config';
import * as Service from './service';

export const getPayments = async (ctx: Context) => {
  const userId = ctx.userData.uid;
  const result = await Service.getPayments(userId);
  response.success(ctx, result);
};

export default getPayments;
