import { ActionProps } from '@interfaces/action';

export const SHOW_MODAL = 'modal/MODAL_OPEN' as const;
export const HIDE_MODAL = 'modal/MODAL_CLOSE' as const;

export const showModal = (view: string): ActionProps => ({
  type: SHOW_MODAL,
  payload: view,
});

export const hideModal = (): ActionProps => ({
  type: HIDE_MODAL,
});
