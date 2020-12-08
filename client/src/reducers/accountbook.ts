import { SET_PRIVATE, SET_SOCIAL, setPrivate, setSocial } from '@actions/accountbook/type';

type AccountBookAction = ReturnType<typeof setPrivate> | ReturnType<typeof setSocial>;

type AccountBookState = {
  type: string;
  socialId: number;
};

const initialState: AccountBookState = {
  type: 'PRIVATE',
  socialId: 0,
};

const accountBook = (
  state: AccountBookState = initialState,
  action: AccountBookAction,
): AccountBookState => {
  switch (action.type) {
    case SET_PRIVATE:
      return { type: 'PRIVATE', socialId: 0 };
    case SET_SOCIAL:
      return { type: 'SOCIAL', socialId: action.payload };
    default:
      return state;
  }
};

export default accountBook;
