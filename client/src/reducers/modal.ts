import { SHOW_MODAL, HIDE_MODAL, showModal, hideModal } from '@actions/modal/type';

type ModalAction = ReturnType<typeof showModal> | ReturnType<typeof hideModal>;

type ModalState = {
  view: string;
};

const initialState: ModalState = {
  view: 'AccountBook',
};

const modal = (state: ModalState = initialState, action: ModalAction): ModalState => {
  switch (action.type) {
    case SHOW_MODAL:
      return { view: action.payload };
    case HIDE_MODAL:
      return { view: 'none' };
    default:
      return state;
  }
};

export default modal;
