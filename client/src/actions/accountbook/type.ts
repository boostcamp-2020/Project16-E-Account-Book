import { ActionProps } from '@interfaces/action';

export const SET_PRIVATE = 'accountbook/SET_PRIVATE' as const;
export const SET_SOCIAL = 'accountbook/SET_SOCIAL' as const;

export const setPrivate = (): ActionProps => ({
  type: SET_PRIVATE,
});

export const setSocial = (id: number): ActionProps => ({
  type: SET_SOCIAL,
  payload: id,
});
