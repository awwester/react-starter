import { SHOW_MODAL, HIDE_MODAL } from 'actions/general/modals';

const initialState = {
  modalType: null,
  modalProps: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      const { modalType, modalProps } = action;
      return { modalType, modalProps };
    case HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
};
