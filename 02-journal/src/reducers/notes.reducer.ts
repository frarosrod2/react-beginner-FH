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
    case NotesType.ADD:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };
    case NotesType.LOAD:
      return {
        ...state,
        notes: [...action.payload],
      };
    case NotesType.UPDATE:
      return {
        ...state,
        notes: state.notes.map((note: any) => {
          return note.id === action.payload.id ? action.payload.note : note;
        }),
      };
    case NotesType.DELETE:
      return {
        ...state,
        active: null,
        notes: state.notes.filter((note: any) => note.id !== action.payload),
      };
    case NotesType.LOGOUT_CLEANING:
      return {
        ...state,
        active: null,
        notes: [],
      };
    default:
      return state;
  }
};

function getNotes(notes: any, action: any) {
  return notes.some((note: any) => note.id === action.id)
    ? notes.map((note: any) => {
        return note.id === action.id && action.note;
      })
    : [...notes, action.note];
}
