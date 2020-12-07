import 'dotenv/config';

export const GET_JWT = `${process.env.REACT_APP_BASE_URL}/login/`;

export const GET_INCOME_CATEGORY = `${process.env.REACT_APP_BASE_URL}/api/category/income`;

export const GET_EXPENDITURE_CATEGORY = `${process.env.REACT_APP_BASE_URL}/api/category/expenditure`;
