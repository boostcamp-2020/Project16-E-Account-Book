import 'dotenv/config';

export const GET_JWT = `${process.env.REACT_APP_BASE_URL}/login/`;

export const GET_USER_NAME = `${process.env.REACT_APP_BASE_URL}/api/user/name`;

export const GET_SOCIAL_BOOKS = `${process.env.REACT_APP_BASE_URL}/api/social/list`;

export const GET_MASTER_BOOKS = `${process.env.REACT_APP_BASE_URL}/api/social/list/master`;

export const GET_INCOME_CATEGORY = `${process.env.REACT_APP_BASE_URL}/api/category/income`;

export const GET_EXPENDITURE_CATEGORY = `${process.env.REACT_APP_BASE_URL}/api/category/expenditure`;

export const GET_PAYMENT = `${process.env.REACT_APP_BASE_URL}/api/payment`;
