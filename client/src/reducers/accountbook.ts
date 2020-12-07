import {
  INIT_DATA,
  SET_PRIVATE,
  SET_SOCIAL,
  initData,
  setPrivate,
  setSocial,
} from '@actions/accountbook/type';

type AccountBookAction =
  | ReturnType<typeof initData>
  | ReturnType<typeof setPrivate>
  | ReturnType<typeof setSocial>;

type AccountBookState = {
  type: string;
  social: number[];
  private: number;
  now: number;
};

const initialState: AccountBookState = {
  type: 'PRIVATE',
  social: [],
  private: 0,
  now: 0,
};

const accountBook = (
  state: AccountBookState = initialState,
  action: AccountBookAction,
): AccountBookState => {
  switch (action.type) {
    case INIT_DATA:
      return {
        type: 'PRIVATE',
        social: action.payload.social,
        private: action.payload.private,
        now: 0,
      };
    case SET_PRIVATE:
      return { type: 'PRIVATE', social: state.social, private: state.private, now: 0 };
    case SET_SOCIAL:
      return { type: 'SOCIAL', social: state.social, private: state.private, now: action.payload };
    default:
      return state;
  }
};

export default accountBook;
