import { ActionProps } from '@interfaces/action';

export const LOGIN = 'user/LOGIN' as const;
export const LOGOUT = 'user/LOGOUT' as const;
export const SET_USER = 'user/SET_USER' as const;

export const login = (): ActionProps => ({
  type: LOGIN,
});

export const logout = (): ActionProps => ({
  type: LOGOUT,
});

export const setUser = (name: string, image: string, isSunday: number): ActionProps => ({
  type: SET_USER,
  payload: { name, image, isSunday },
});
