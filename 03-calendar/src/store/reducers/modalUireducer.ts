import { ModalUi } from '../../interfaces/modalUi.interfaces';
import { ModalUiType } from '../../types/modal.types';
import { Action } from '../../interfaces/actions.interfaces';

const initialState: ModalUi = {
  modalOpen: false,
};

export const modalUiReducer = (
  state = initialState,
  action: Action<ModalUiType, any>
) => {
  switch (action.type) {
    case ModalUiType.OPEN_MODAL:
      return { ...state, modalOpen: true };
    case ModalUiType.CLOSE_MODAL:
      return { ...state, modalOpen: false };

    default:
      return { ...state };
  }
};
