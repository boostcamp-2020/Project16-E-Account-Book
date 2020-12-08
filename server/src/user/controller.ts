import { Context } from 'koa';
import * as response from '../utils/response';
import 'dotenv/config';
import * as Service from './service';

export const getUserName = async (ctx: Context) => {
  const userId = ctx.userData.uid;
  const result = await Service.getUserName(userId);
  response.success(ctx, result);
};

export default getUserName;
