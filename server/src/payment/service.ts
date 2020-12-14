import 'dotenv/config';
import sql from '../model/db';
import query from '../model/query';

export const getUserPayments = async (userId: number) => {
  const result = await sql(query.READ_USER_PAYMENTS, [userId]);
  return result;
};

export const createUserPayments = async (userId: number, paymentId: string) => {
  const result = await sql(query.CREATE_USER_PAYMENTS, [userId, paymentId]);
  return result;
};

export const createPayments = async (name: string) => {
  const result = await sql(query.CREATE_PAYMENTS, [name]);
  return result;
};

export const getPayments = async () => {
  const result = await sql(query.READ_PAYMENTS, []);
  return result;
};

export const getPaymentIdByName = async (name: string) => {
  const result = await sql(query.GET_PAYMENT_ID_BY_NAME, [name]);
  return result;
};

export const deletePayment = async (id: number) => {
  await sql(query.DELETE_PAYMENTS, [id]);
};

export const deleteUserPayment = async (id: number) => {
  await sql(query.DELETE_USER_PAYMENTS, [id]);
};

export const deleteRelatedSocialTransaction = async (userId: number, paymentId: number) => {
  await sql(query.DELETE_SOCIAL_TRANSACTION_BY_USERID_PAYMENTID, [userId, paymentId]);
};

export const deleteRelatedPrivateTransaction = async (accountbookId: number, paymentId: number) => {
  await sql(query.DELETE_PRIVATE_TRANSACTION_BY_PAYMENTID, [accountbookId, paymentId]);
};

export const geyPaymentIdByPk = async (id: number) => {
  const result = await sql(query.GET_PAYMENT_ID_BY_PK, [id]);
  return result[0].payment_id;
};
