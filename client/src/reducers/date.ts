import { PRE_MONTH, NEXT_MONTH, subMonth, addMonth } from '@actions/date/type';

type MonthAction = ReturnType<typeof subMonth> | ReturnType<typeof addMonth>;

type MonthState = {
  year: number;
  month: number;
};

const today = new Date();

const initialState: MonthState = {
  year: today.getFullYear(),
  month: today.getMonth() + 1,
};

const modal = (state: MonthState = initialState, action: MonthAction): MonthState => {
  switch (action.type) {
    case PRE_MONTH:
      if (state.month === 1) {
        return { year: state.year - 1, month: 12 };
      }
      return { year: state.year, month: state.month - 1 };
    case NEXT_MONTH:
      if (state.month === 12) {
        return { year: state.year + 1, month: 1 };
      }
      return { year: state.year, month: state.month + 1 };
    default:
      return state;
  }
};

export default modal;
