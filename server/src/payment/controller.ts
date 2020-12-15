import { Context } from 'koa';
import * as response from '../utils/response';
import 'dotenv/config';
import * as Service from './service';
import { getAccountBookId } from '../privateBook/service';

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

export const deleteUserPayment = async (ctx: any) => {
  const { id } = ctx.params;
  const userId = ctx.userData.uid;

  const privateAccountbookId = await getAccountBookId(userId);

  const paymentId = await Service.geyPaymentIdByPk(id);

  await Service.deleteUserPayment(id);

  await Service.deleteRelatedPrivateTransaction(privateAccountbookId, paymentId);

  await Service.deleteRelatedSocialTransaction(userId, paymentId);

  response.success(ctx, paymentId);
};
