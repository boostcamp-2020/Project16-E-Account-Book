import { ActionProps } from '@interfaces/action';

export const LOGIN = 'user/LOGIN' as const;
export const LOGOUT = 'user/LOGOUT' as const;
export const SET_NAME = 'user/SET_NAME' as const;

export const login = (): ActionProps => ({
  type: LOGIN,
});

export const logout = (): ActionProps => ({
  type: LOGOUT,
});

export const setName = (name: string): ActionProps => ({
  type: SET_NAME,
  payload: name,
});
