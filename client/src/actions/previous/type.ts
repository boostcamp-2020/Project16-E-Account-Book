import { ActionProps } from '@interfaces/action';

export const SET_PREVIOUS = 'previous/SET_PAYMENT' as const;

export const setPrevious = (previous: string): ActionProps => ({
  type: SET_PREVIOUS,
  payload: previous,
});
