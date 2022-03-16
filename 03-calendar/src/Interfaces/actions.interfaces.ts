import { AuthType } from '../types/auth.types';
import { CalendarType } from '../types/calendar.types';
import { ModalUiType } from '../types/modal.types';

export interface ModalUiAction {
  type: ModalUiType;
  payload?: any;
}
export interface CalendarAction {
  type: CalendarType;
  payload?: any;
}
export interface AuthAction {
  type: AuthType;
  payload?: any;
}
