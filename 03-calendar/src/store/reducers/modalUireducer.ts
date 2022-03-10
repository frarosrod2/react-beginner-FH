import { ModalUiAction } from '../../Interfaces/actions.interfaces';
import { ModalUi } from '../../Interfaces/modalUi.interfaces';
import { ModalUiType } from '../../types/modal.types';

const initialState: ModalUi = {
  modalOpen: false,
};

export const modalUiReducer = (state = initialState, action: ModalUiAction) => {
  switch (action.type) {
    case ModalUiType.OPEN_MODAL:
      return { ...state, modalOpen: true };
    case ModalUiType.CLOSE_MODAL:
      return { ...state, modalOpen: false };

    default:
      return { ...state };
  }
};
