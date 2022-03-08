import { useSelector } from 'react-redux';
import { JournalEntry } from './JournalEntry';

export const JournalEntries = () => {
  const { notes } = useSelector((state: any) => state.notes);


  return (
    <div className="journal__entries">
      {notes.map((note: any) => (
        <JournalEntry key={note.id} note={note} />
      ))}
    </div>
  );
};
