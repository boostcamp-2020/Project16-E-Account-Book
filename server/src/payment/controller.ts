import { Context } from 'koa';
import * as response from '../utils/response';
import 'dotenv/config';
import * as Service from './service';

export const getUserPayments = async (ctx: Context) => {
  const userId = ctx.userData.uid;
  const result = await Service.getUserPayments(userId);
  response.success(ctx, result);
};

export const createUserPayment = async (ctx: any) => {
  const { name } = ctx.request.body;
  const userId = ctx.userData.uid;

  let createPaymentResult;
  let createUserPaymentResult;
  let checkInclude;
  let newUserPaymentId;

  checkInclude = await Service.getPaymentIdByName(name);
  if (checkInclude.length === 0) {
    createPaymentResult = await Service.createPayments(name);
    newUserPaymentId = createPaymentResult.insertId;
  } else {
    newUserPaymentId = checkInclude[0].id;
  }
  createUserPaymentResult = await Service.createUserPayments(userId, newUserPaymentId);

  response.success(ctx, createUserPaymentResult.insertId);
};
