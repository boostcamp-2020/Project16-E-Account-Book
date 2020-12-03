import { Context } from 'koa';
import * as response from '../utils/response';
import 'dotenv/config';
import * as Service from './service';

export const getSocialBooks = async (ctx: Context) => {
  const userId = 18; // TODO : jwtToken 수정 후 고치기
  const result = await Service.getSocialBooks(userId);
  response.success(ctx, result);
};

export const getSocialBooksMaster = async (ctx: Context) => {
  const userId = 11; // TODO : jwtToken 수정 후 고치기
  const result = await Service.getSocialBooksMaster(userId);
  response.success(ctx, result);
};
