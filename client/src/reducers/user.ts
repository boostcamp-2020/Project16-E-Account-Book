import { LOGIN, LOGOUT, SET_USER, login, logout, setUser } from '@actions/user/type';

type UserAction = ReturnType<typeof login> | ReturnType<typeof logout> | ReturnType<typeof setUser>;

type UserState = {
  isLogin: boolean;
  name: string;
  image: string;
};

const initIsLogin = () => {
  return !!localStorage.getItem('jwt');
};

const initialState: UserState = {
  isLogin: initIsLogin(),
  name: '',
  image: '',
};

const user = (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case LOGIN:
      return { isLogin: true, name: state.name, image: state.image };
    case LOGOUT:
      return { isLogin: false, name: '', image: '' };
    case SET_USER:
      return { isLogin: state.isLogin, name: action.payload.name, image: action.payload.image };
    default:
      return state;
  }
};

export default user;
