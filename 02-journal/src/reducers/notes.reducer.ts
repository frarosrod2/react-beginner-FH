import { Notes } from '../interfaces/note.interface';
import { NotesAction, NotesType } from '../types/notes.types';

const initialState: Notes = {
  notes: [],
  active: null,
};

export const notesReducer = (state = initialState, action: NotesAction) => {
  switch (action.type) {
    case NotesType.ACTIVE:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };
    case NotesType.LOAD:
      return {
        ...state,
        notes: [...action.payload],
      };
    default:
      return state;
  }
};