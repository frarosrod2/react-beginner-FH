import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';
import { NotesType } from '../types/notes.types';
import { loadNotes } from '../helpers/loadNotes';
import Swal from 'sweetalert2';
import { fileUpload } from '../helpers/fileUpload';

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

export const startSaveNote = (note: any) => {
  return async (dispatch: any, getState: any) => {
    const { uid } = getState().auth;

    if (!note.url) {
      delete note.url;
    }

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;
    const noteDoc = doc(db, `${uid}/journal/notes/${note.id}`);
    await updateDoc(noteDoc, noteToFirestore);
    dispatch(refreshNote(note.id, noteToFirestore));
    Swal.fire('Saved', note.title, 'success');
  };
};

export const startUploading = (file: any) => {
  return async (dispatch: any, getState: any) => {
    const { active } = getState().notes;

    Swal.fire({
      title: 'Uploading...',
      text: 'Please wait',
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });

    const fileUrl = await fileUpload(file);
    active.url = fileUrl;
    dispatch(startSaveNote(active));
    Swal.close();
  };
};

export const refreshNote = (id: string | number, note: any) => ({
  type: NotesType.UPDATE,
  payload: { id, note: { id, ...note } },
});

export const setNotes = (notes: any) => ({
  type: NotesType.LOAD,
  payload: notes,
});
