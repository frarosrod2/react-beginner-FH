import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';
export const loadNotes = async (uid: string | number) => {
  const collect = collection(db, `${uid}/journal/notes`);
  const notes: any = [];

  const notesSnap = await getDocs(collect);

  notesSnap.forEach((note) => {
    notes.push({ id: note.id, ...note.data() });
  });

  return notes;
};
