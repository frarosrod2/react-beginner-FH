import moment from 'moment';
import { CalendarAction } from '../../interfaces/actions.interfaces';
import { Calendar } from '../../interfaces/calendar.interfaces';
import { CalendarType } from '../../types/calendar.types';
import { EventCal } from '../../interfaces/event.interfaces';

const initialState: Calendar = {
  events: [
    {
      id: new Date().getTime(),
      title: 'Cumple',
      start: moment().toDate(),
      end: moment().add(2, 'hours').toDate(),
      bgcolor: '#fafafa',
      notes: [],
      user: {
        _id: '123',
        name: 'fernando',
      },
    },
  ],
  activeEvent: null,
};

export const calendarReducer = (state = initialState, action: CalendarAction) => {
  switch (action.type) {
    case CalendarType.ADD_NEW:
      return {
        ...state,
        events: [action.payload, ...state.events],
      };
    case CalendarType.SET_ACTIVE:
      return {
        ...state,
        activeEvent: action.payload,
      };
    case CalendarType.CLEAR_ACTIVE:
      return { ...state, activeEvent: null };
    case CalendarType.UPDATE:
      return {
        ...state,
        events: state.events.map((event: EventCal) => {
          return event.id === action.payload.id ? action.payload : event;
        }),
      };
    case CalendarType.DELETE:
      return {
        ...state,
        events: state.events.filter((event: EventCal) => {
          return event.id !== state?.activeEvent?.id;
        }),
        activeEvent: null,
      };
    default:
      return state;
  }
};
