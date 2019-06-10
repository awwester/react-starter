export const SHOW_MODAL = 'SHOW_MODAL';
export const showModal = (modalType, modalProps = {}) => ({
  type: SHOW_MODAL,
  modalType,
  modalProps,
});

export const HIDE_MODAL = 'HIDE_MODAL';
export const hideModal = () => ({ type: HIDE_MODAL });
