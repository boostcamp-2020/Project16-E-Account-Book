import { ActionProps } from '@interfaces/action';

export const LOGIN = 'user/login' as const;
export const LOGOUT = 'user/logout' as const;

export const login = (): ActionProps => ({
  type: LOGIN,
});

export const logout = (): ActionProps => ({
  type: LOGOUT,
});
