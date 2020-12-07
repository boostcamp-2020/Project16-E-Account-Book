import { GET_CATEGORY, getCategory } from '@actions/category/type';
import { Category } from '@interfaces/category';
import { getAxios } from '@utils/axios';
import * as API from '@utils/api';

type CategoryAction = ReturnType<typeof getCategory>;

type CategoryState = {
  income: Category[];
  expenditure: Category[];
};

const getIncomeCategory = async () => {
  const { data } = await getAxios(API.GET_INCOME_CATEGORY);
  return data;
};

const getExpenditureCategory = async () => {
  const { data } = await getAxios(API.GET_EXPENDITURE_CATEGORY);
  return data;
};

const initCategory = async () => {
  const income = await getIncomeCategory();
  const expenditure = await getExpenditureCategory();
  return { income, expenditure };
};

initCategory();

const initialState = {
  income: [],
  expenditure: [],
};

const category = (state: CategoryState = initialState, action: CategoryAction): CategoryState => {
  switch (action.type) {
    case GET_CATEGORY:
      return { income: state.income, expenditure: state.expenditure };
    default:
      return state;
  }
};

export default category;
