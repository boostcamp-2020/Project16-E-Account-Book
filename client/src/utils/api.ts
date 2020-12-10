import 'dotenv/config';

export const GET_JWT = `${process.env.REACT_APP_BASE_URL}/login/`;

export const GET_TRANSACTION_SOCIAL_LIST = `${process.env.REACT_APP_BASE_URL}/api/social/transaction/list`;

export const GET_TRANSACTION_PRIVATE_LIST = `${process.env.REACT_APP_BASE_URL}/api/private/transaction/list`;

export const GET_USER_INFO = `${process.env.REACT_APP_BASE_URL}/api/user/info`;

export const GET_SOCIAL_BOOKS = `${process.env.REACT_APP_BASE_URL}/api/social/list`;

export const GET_MASTER_BOOKS = `${process.env.REACT_APP_BASE_URL}/api/social/list/master`;

export const GET_INCOME_CATEGORY = `${process.env.REACT_APP_BASE_URL}/api/category/income`;

export const GET_EXPENDITURE_CATEGORY = `${process.env.REACT_APP_BASE_URL}/api/category/expenditure`;

export const GET_PAYMENT = `${process.env.REACT_APP_BASE_URL}/api/payment`;

export const POST_CREATE_SOCIAL = `${process.env.REACT_APP_BASE_URL}/api/social/createAccountbook`;

export const GET_SOCIAL_FOUR_MONTH_STATISTICS = `${process.env.REACT_APP_BASE_URL}/api/social/statistics/monthly/`;

export const GET_PRIVATE_ANALYSIS = `${process.env.REACT_APP_BASE_URL}/api/private/analysis`;

export const GET_PRIVATE_FOUR_MONTH_STATISTICS = `${process.env.REACT_APP_BASE_URL}/api/private/statistics/monthly/`;

export const POST_PRIVATE_TRANSACTION = `${process.env.REACT_APP_BASE_URL}/api/private/transaction`;

export const POST_SOCIAL_TRANSACTION = `${process.env.REACT_APP_BASE_URL}/api/social/transaction`;

