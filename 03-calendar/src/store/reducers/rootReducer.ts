import { combineReducers } from 'redux';
import { modalUiReducer } from './modalUiReducer';
import { calendarReducer } from './calendarReducer';
import { authReducer } from './authReducer';

export const rootReducer = combineReducers({
  modalUi: modalUiReducer,
  calendar: calendarReducer,
  auth: authReducer,
});