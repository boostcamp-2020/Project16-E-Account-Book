export const SHOW_MODAL = 'modal/MODAL_OPEN' as const;
export const HIDE_MODAL = 'modal/MODAL_CLOSE' as const;

export const showModal = (view: string) => ({
  type: SHOW_MODAL,
  payload: view,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});
