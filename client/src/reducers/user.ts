import { LOGIN, LOGOUT, login, logout } from '@actions/user/type';

type UserAction = ReturnType<typeof login> | ReturnType<typeof logout>;

type UserState = {
  isLogin: boolean;
};

const initIsLogin = () => {
  return !!localStorage.getItem('jwt');
};

const initialState: UserState = {
  isLogin: initIsLogin(),
};

const user = (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case LOGIN:
      return { isLogin: true };
    case LOGOUT:
      return { isLogin: false };
    default:
      return state;
  }
};

export default user;
