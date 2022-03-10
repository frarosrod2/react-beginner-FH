import { ModalUiType } from '../../types/calendar.types';

export const modalUiOpen = () => ({
  type: ModalUiType.OPEN_MODAL,
});
export const modalUiClose = () => ({
  type: ModalUiType.CLOSE_MODAL,
});
