import { EventCal } from '../interfaces/event.interfaces';
import moment from 'moment';

export const prepareEvents = (events: EventCal[]) => {
  return events.map((event) => ({
    ...event,
    end: moment(event.end).toDate(),
    start: moment(event.start).toDate(),
  }));
};
