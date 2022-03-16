import { Calendar } from './calendar.interfaces';
import { ModalUi } from './modalUi.interfaces';
import { User } from './user.interface';

export interface RootState {
  modalUi: ModalUi;
  calendar: Calendar;
  auth: User;
}
