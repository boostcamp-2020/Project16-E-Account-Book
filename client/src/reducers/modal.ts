import {
  ACCOUNTBOOK_OPEN,
  ACCOUNTBOOK_CLOSE,
  accountbookOpen,
  accountbookClose,
} from '@actions/modal/type';

type ModalAction = ReturnType<typeof accountbookOpen> | ReturnType<typeof accountbookClose>;

type ModalState = {
  isOpen: boolean;
};

const initialState: ModalState = {
  isOpen: true,
};

const modal = (state: ModalState = initialState, action: ModalAction): ModalState => {
  switch (action.type) {
    case ACCOUNTBOOK_OPEN:
      return { isOpen: true };
    case ACCOUNTBOOK_CLOSE:
      return { isOpen: false };
    default:
      return state;
  }
};

export default modal;
