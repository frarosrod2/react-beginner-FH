import { Navbar } from '../components/ui/Navbar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Event } from '../Interfaces/event.interface';

const localizer = momentLocalizer(moment);

const events: Event[] = [
  {
    title: 'Cumple',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
  },
];

export const CalendarPage = () => {
  return (
    <div className="calendar-screen">
      <Navbar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};
