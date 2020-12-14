import 'dotenv/config';

export const GET_JWT = `${process.env.REACT_APP_BASE_URL}/login/`;

export const GET_TRANSACTION_SOCIAL_LIST = (bookId: number, year: number, month: number): string =>
  `${process.env.REACT_APP_BASE_URL}/api/social/transaction/list/${bookId}/${year}/${month}`;

export const GET_TRANSACTION_PRIVATE_LIST = (year: number, month: number): string =>
  `${process.env.REACT_APP_BASE_URL}/api/private/transaction/list/${year}/${month}`;

export const GET_USER_INFO = `${process.env.REACT_APP_BASE_URL}/api/user/info`;

export const GET_SOCIAL_BOOKS = `${process.env.REACT_APP_BASE_URL}/api/social/list`;

export const GET_MASTER_BOOKS = `${process.env.REACT_APP_BASE_URL}/api/social/list/master`;

export const GET_INCOME_CATEGORY = `${process.env.REACT_APP_BASE_URL}/api/category/income`;

export const GET_EXPENDITURE_CATEGORY = `${process.env.REACT_APP_BASE_URL}/api/category/expenditure`;

export const GET_PAYMENT = `${process.env.REACT_APP_BASE_URL}/api/payment`;

export const POST_CREATE_SOCIAL = `${process.env.REACT_APP_BASE_URL}/api/social/createAccountbook`;

export const GET_SOCIAL_FOUR_MONTH_STATISTICS = (bookId: number): string =>
  `${process.env.REACT_APP_BASE_URL}/api/social/statistics/monthly/${bookId}`;

export const GET_SOCIAL_FIVE_WEEK_STATISTICS = (bookId: number): string =>
  `${process.env.REACT_APP_BASE_URL}/api/social/statistic/weeks/${bookId}`;

export const GET_PRIVATE_FIVE_WEEK_STATISTICS = `${process.env.REACT_APP_BASE_URL}/api/private/statistic/weeks`;

export const GET_PRIVATE_ANALYSIS = `${process.env.REACT_APP_BASE_URL}/api/private/analysis`;

export const GET_PRIVATE_FOUR_MONTH_STATISTICS = `${process.env.REACT_APP_BASE_URL}/api/private/statistics/monthly/`;

export const POST_PRIVATE_TRANSACTION = `${process.env.REACT_APP_BASE_URL}/api/private/transaction`;

export const POST_SOCIAL_TRANSACTION = `${process.env.REACT_APP_BASE_URL}/api/social/transaction`;

export const GET_PRIVATE_STATISTIC_CATEGORY = (year: number, month: number): string =>
  `${process.env.REACT_APP_BASE_URL}/api/private/statistic/category/${year}/${month}`;

export const GET_SOCIAL_STATISTIC_CATEGORY = (
  bookId: number,
  year: number,
  month: number,
): string =>
  `${process.env.REACT_APP_BASE_URL}/api/social/statistic/category/${bookId}/${year}/${month}`;

export const POST_PAYMENT = `${process.env.REACT_APP_BASE_URL}/api/payment`;

export const DELETE_PAYMENT = `${process.env.REACT_APP_BASE_URL}/api/payment`;

export const PUT_SOCIAL_TRANSACTION = `${process.env.REACT_APP_BASE_URL}/api/social/transaction`;

export const PUT_PRIVATE_TRANSACTION = `${process.env.REACT_APP_BASE_URL}/api/private/transaction`;

export const DELETE_SOCIAL_TRANSACTION = (id: number): string =>
  `${process.env.REACT_APP_BASE_URL}/api/social/transaction/${id}`;

export const DELETE_PRIVATE_TRANSACTION = (id: number): string =>
  `${process.env.REACT_APP_BASE_URL}/api/private/transaction/${id}`;
