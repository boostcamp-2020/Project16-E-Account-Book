import 'dotenv/config';
import sql from '../model/db';
import query from '../model/query';

export const getIncomeCategory = async () => {
  const result = await sql(query.READ_INCOME_CATEGORY, []);
  return result;
};

export const getExpenditureCategory = async () => {
  const result = await sql(query.READ_EXPENDITURE_CATEGORY, []);
  return result;
};
