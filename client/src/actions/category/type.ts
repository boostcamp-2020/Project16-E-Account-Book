import { ActionProps } from '@interfaces/action';
import { Category } from '@interfaces/category';

export const SET_CATEGORY = 'category/SET_CATEGORY' as const;

export const setCategory = (income: Category[], expenditure: Category[]): ActionProps => ({
  type: SET_CATEGORY,
  payload: {
    income,
    expenditure,
  },
});
