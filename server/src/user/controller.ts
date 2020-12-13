import { Context } from 'koa';
import * as response from '../utils/response';
import 'dotenv/config';
import * as Service from './service';

export const getUserInfo = async (ctx: Context) => {
  const userId = ctx.userData.uid;
  const result = await Service.getUserInfo(userId);
  response.success(ctx, result);
};

export const getUserByName = async (ctx: Context) => {
  const { name } = ctx.params;
  const result = await Service.getUserByName(name);
  response.success(ctx, result);
};
