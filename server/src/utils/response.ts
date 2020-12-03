import { Context } from 'koa';

export const success = (ctx: Context, result: any) => {
  ctx.status = 200;
  ctx.body = {
    status: 'success',
    data: result,
  };
};

export const fail = (ctx: Context, status: number, result: any) => {
  ctx.status = status;
  ctx.body = {
    status: 'fail',
    data: result,
  };
};

export const unAuthorized = (ctx: Context, result: any) => {
  ctx.status = 401;
  ctx.body = {
    status: 'unAuthorized',
    data: result,
  };
};
