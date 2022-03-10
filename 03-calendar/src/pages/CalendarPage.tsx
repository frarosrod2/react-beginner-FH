import { Navbar } from '../components/ui/Navbar';
import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';
import { useDispatch, useSelector } from 'react-redux';

import { EventCal } from '../Interfaces/event.interface';
import { messages } from '../helpers/calendar-messages-es';
import { CalendarEvent } from '../components/calendar/CalendarEvent';
import { CalendarModal } from '../components/calendar/CalendarModal';
import { modalUiOpen } from '../store/actions/modalUi.actions';
import { RootState } from '../Interfaces/rootState.interfaces';
import { eventSet } from '../store/actions/events.actions';
import { AddNewFab } from '../components/ui/AddNewFab';

const localizer = momentLocalizer(moment);
moment.locale('es');

export const CalendarPage = () => {
  const dispatch = useDispatch();
  const { events } = useSelector((state: RootState) => state.calendar);

  const [lastView, setLastView]: any = useState(
    localStorage.getItem('lastView') || 'month'
  );

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

  const eventStyleGetter: any = (
    event: EventCal,
    start: Date,
    end: Date,
    isSelected: boolean
  ) => {
    const style: any = {
      backgroundColor: '#367CF7',
      color: 'white',
      display: 'block',
      opacity: 0.8,
      borderRadius: '0px',
    };

    return style;
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
      />
      <AddNewFab />
      <CalendarModal />
    </div>
  );
};
