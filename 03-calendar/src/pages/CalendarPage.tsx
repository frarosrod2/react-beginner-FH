import { Navbar } from '../components/ui/Navbar';
import { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';
import { useDispatch, useSelector } from 'react-redux';

import { messages } from '../helpers/calendar-messages-es';
import { CalendarEvent } from '../components/calendar/CalendarEvent';
import { CalendarModal } from '../components/calendar/CalendarModal';
import { modalUiOpen } from '../store/actions/modalUi.actions';
import {
  eventSet,
  eventClearActiveNote,
  eventStartLoading,
} from '../store/actions/events.actions';
import { AddNewFab } from '../components/ui/AddNewFab';
import { DeleteEventFab } from '../components/ui/DeleteEventFab';
import { EventCal } from '../interfaces/event.interfaces';
import { RootState } from '../store/store';

const localizer = momentLocalizer(moment);
moment.locale('es');

export const CalendarPage = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state: RootState) => state.calendar);
  const { uid } = useSelector((state: RootState) => state.auth);

  const [lastView, setLastView]: any = useState(
    localStorage.getItem('lastView') || 'month'
  );

  useEffect(() => {
    dispatch(eventStartLoading());
  }, [dispatch]);

  const onDoubleClick = (e: any) => {
    dispatch(modalUiOpen());
  };

  const onSelect = (e: any) => {
    dispatch(eventSet(e));
  };

  const onViewChange = (e: any) => {
    setLastView(e);
    localStorage.setItem('lastView', e);
  };

  const onSelectedSlot = (e: any) => {
    dispatch(eventClearActiveNote());
  };

  const eventStyleGetter: any = (
    event: EventCal,
    start: Date,
    end: Date,
    isSelected: boolean
  ) => {
    const style: any = {
      backgroundColor: uid === event.user._id ? 'red' : '#465660',
      color: 'white',
      display: 'block',
      opacity: 0.8,
      borderRadius: '0px',
    };

    return { style };
  };

  return (
    <div className="calendar-screen">
      <Navbar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        components={{ event: CalendarEvent }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChange}
        view={lastView}
        onSelectSlot={onSelectedSlot}
        selectable={true}
      />
      <AddNewFab />
      <CalendarModal />
      {activeEvent && <DeleteEventFab />}
    </div>
  );
};
