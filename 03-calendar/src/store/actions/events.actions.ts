import { EventCal } from '../../Interfaces/event.interface';
import { CalendarType } from '../../types/calendar.types';

export const eventAddNew = (event: EventCal) => ({
  type: CalendarType.ADD_NEW,
  payload: event,
});
export const eventSet = (event: EventCal) => ({
  type: CalendarType.SET_ACTIVE,
  payload: event,
});

export const eventClearActiveNote = () => ({
  type: CalendarType.CLEAR_ACTIVE,
});
export const eventUpdate = (event: EventCal) => ({
  type: CalendarType.UPDATE,
  payload: event,
});
export const eventDelete = () => ({
  type: CalendarType.DELETE,
});
