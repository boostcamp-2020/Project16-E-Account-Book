import { ActionProps } from '@interfaces/action';
import { Payment } from '@interfaces/payment';

export const SET_PAYMENT = 'payment/SET_PAYMENT' as const;

export const setPayment = (payment: Payment[]): ActionProps => ({
  type: SET_PAYMENT,
  payload: payment,
});
