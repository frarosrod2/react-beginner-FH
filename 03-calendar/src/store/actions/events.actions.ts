import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { CalendarType } from '../../types/calendar.types';
import { fetchConToken } from '../../helpers/fetch';
import { RootState } from '../../interfaces/rootState.interfaces';
import { prepareEvents } from '../../helpers/prepareEvents';
import { EventCal } from '../../interfaces/event.interfaces';

//** Acciones Redux Thunk
export const eventStartAddNew = (event: EventCal) => {
  return async (dispatch: any, getState: () => RootState) => {
    const { uid, name } = getState().auth;
    try {
      const resp = await fetchConToken('events', event, 'POST');
      const body = await resp.json();
      console.log('body', body);

      if (body.ok) {
        event.id = body.evento.id;
        event.user = {
          _id: uid,
          name: name,
        };
        dispatch(eventAddNew(event));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const eventStartLoading = () => {
  return async (dispatch: any) => {
    try {
      const resp = await fetchConToken('events');
      const body = await resp.json();

      const events = prepareEvents(body.eventos);
      dispatch(eventsLoaded(events));
    } catch (error) {
      console.log(error);
    }
  };
};

export const eventStartUpdate = (event: EventCal) => {
  return async (dispatch: any) => {
    try {
      const resp = await fetchConToken(`events/${event.id}`, event, 'PUT');
      const body = await resp.json();
      if (body.ok) {
        dispatch(eventUpdate(event));
      } else {
        Swal.fire('Error', body.msg, 'error');
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const eventStartDelete = () => {
  return async (dispatch: any, getState: () => RootState) => {
    try {
      const { id } = getState().calendar.activeEvent;

      const resp = await fetchConToken(`events/${id}`, {}, 'DELETE');
      const body = await resp.json();
      if (body.ok) {
        dispatch(eventDelete());
      } else {
        Swal.fire('Error', body.msg, 'error');
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//** Acciones Redux
const eventAddNew = (event: EventCal) => ({
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
export const eventsLoaded = (events: EventCal[]) => ({
  type: CalendarType.LOADED,
  payload: events,
});
export const eventLogout = () => ({
  type: CalendarType.LOGOUT,
});
