import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes.actions';

export const JournalEntry = ({ note }: any) => {
  const dispatch = useDispatch();

  const { id, title, body, date, url }: any = note;
  const notedate = moment(date);

  const handleEntryClick = () => {
    dispatch(activeNote(id, note));
  };

  return (
    <div className="journal__entry pointer" onClick={handleEntryClick}>
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${url})`,
          }}></div>
      )}
      <div className="journal__entry-body">
        <p className="journall__entry-title">{title}</p>
        <p className="journal__entry-content">{body}</p>
      </div>
      <div className="journal__entry-date-box">
        <span>{notedate.format('dddd')}</span>
        <h4>{notedate.format('Do')}</h4>
      </div>
    </div>
  );
};
