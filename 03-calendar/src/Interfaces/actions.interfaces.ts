import { ModalUiType, CalendarType } from '../types/calendar.types';

export interface ModalUiAction {
  type: ModalUiType;
  payload?: any;
}
export interface CalendarAction {
  type: CalendarType;
  payload?: any;
}
