import { LOGIN, LOGOUT, SET_NAME, login, logout, setName } from '@actions/user/type';

type UserAction = ReturnType<typeof login> | ReturnType<typeof logout> | ReturnType<typeof setName>;

type UserState = {
  isLogin: boolean;
  name: string;
};

const initIsLogin = () => {
  return !!localStorage.getItem('jwt');
};

const initialState: UserState = {
  isLogin: initIsLogin(),
  name: '',
};

const user = (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case LOGIN:
      return { isLogin: true, name: state.name };
    case LOGOUT:
      return { isLogin: false, name: '' };
    case SET_NAME:
      return { isLogin: state.isLogin, name: action.payload };
    default:
      return state;
  }
};

export default user;
