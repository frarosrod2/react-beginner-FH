import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';
import { NotesType } from '../types/notes.types';
import { loadNotes } from '../helpers/loadNotes';

export const startNewNote = () => {
  return async (dispatch: any, getState: any) => {
    const { uid } = getState().auth;

    const newNote = {
      title: 'test',
      body: 'test',
      date: new Date().getTime(),
    };

    const doc = await addDoc(collection(db, `${uid}/journal/notes`), newNote);
    dispatch(activeNote(doc.id, newNote));
  };
};

export const activeNote = (id: string | number, note: any) => ({
  type: NotesType.ACTIVE,
  payload: {
    id,
    ...note,
  },
});

export const startLoadingNotes = (uid: string | number) => {
  return async (dispatch: any) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const setNotes = (notes: any) => ({
  type: NotesType.LOAD,
  payload: notes,
});
