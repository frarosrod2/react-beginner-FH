import { Calendar } from './calendar.interfaces';
import { ModalUi } from './modalUi.interfaces';

export interface RootState {
  modalUi: ModalUi;
  calendar: Calendar;
}
