import 'dotenv/config';

export const GET_JWT = `${process.env.REACT_APP_BASE_URL}/login/`;

export const GET_TRANSACTION_SOCIAL_LIST = `${process.env.REACT_APP_BASE_URL}/social/transactionList`;

export const GET_TRANSACTION_PRIVATE_LIST = `${process.env.REACT_APP_BASE_URL}/private/transactionList`;

export const GET_SOCIAL_BOOKS = `${process.env.REACT_APP_BASE_URL}/social/`;
