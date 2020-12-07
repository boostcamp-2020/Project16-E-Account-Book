import { ActionProps } from '@interfaces/action';

export const INIT_DATA = 'accountbook/INIT_DATA' as const;
export const SET_PRIVATE = 'accountbook/SET_PRIVATE' as const;
export const SET_SOCIAL = 'accountbook/SET_SOCIAL' as const;

export const initData = (social: number[], privateId: number): ActionProps => ({
  type: INIT_DATA,
  payload: {
    social,
    private: privateId,
  },
});

export const setPrivate = (): ActionProps => ({
  type: SET_PRIVATE,
});

export const setSocial = (id: number): ActionProps => ({
  type: SET_SOCIAL,
  payload: id,
});
