import { SET_CATEGORY, GET_CATEGORY, setCategory, getCategory } from '@actions/category/type';
import { Category } from '@interfaces/category';

type CategoryAction = ReturnType<typeof setCategory> | ReturnType<typeof getCategory>;

type CategoryState = {
  income: Category[];
  expenditure: Category[];
};

const initialState = {
  income: [],
  expenditure: [],
};

const category = (state: CategoryState = initialState, action: CategoryAction): CategoryState => {
  switch (action.type) {
    case SET_CATEGORY:
      return { income: action.payload.income, expenditure: action.payload.expenditure };
    case GET_CATEGORY:
      return { income: state.income, expenditure: state.expenditure };
    default:
      return state;
  }
};

export default category;
