import { combineReducers } from 'redux';
import { modalUiReducer } from './modalUiReducer';
import { calendarReducer } from './calendarReducer';

export const rootReducer = combineReducers({
  modalUi: modalUiReducer,
  calendar: calendarReducer,
});
