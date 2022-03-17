import { CalendarAction } from '../../interfaces/actions.interfaces';
import { Calendar } from '../../interfaces/calendar.interfaces';
import { EventCal } from '../../interfaces/event.interfaces';
import { CalendarType } from '../../types/calendar.types';

// {
//   id: new Date().getTime(),
//   title: 'Cumple',
//   start: moment().toDate(),
//   end: moment().add(2, 'hours').toDate(),
//   notes: [],
//   user: {
//     _id: '123',
//     name: 'fernando',
//   },
// },

const initialState: Calendar = {
  events: [],
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
    case CalendarType.LOADED:
      return {
        ...state,
        events: [...action.payload],
      };
    case CalendarType.LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
