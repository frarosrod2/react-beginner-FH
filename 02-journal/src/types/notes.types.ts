export enum NotesType {
  ADD = '[Notes] New note',
  ACTIVE = '[Notes] Set active note',
  LOAD = '[Notes] Load notes',
  UPDATE = '[Notes] Update note',
  FILE_URL = '[Notes] Updated image url',
  DELETE = '[Notes] Delete note',
  LOGOUT_CLEANING = '[Notes] Logout Cleaning',
}

export interface NotesAction {
  type: NotesType;
  payload: any;
}
