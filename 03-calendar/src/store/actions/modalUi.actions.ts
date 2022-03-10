import { ModalUiType } from '../../types/modal.types';

export const modalUiOpen = () => ({
  type: ModalUiType.OPEN_MODAL,
});
export const modalUiClose = () => ({
  type: ModalUiType.CLOSE_MODAL,
});
