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
