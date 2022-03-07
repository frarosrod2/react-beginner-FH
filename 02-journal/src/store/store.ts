import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { authReducer } from '../reducers/auth.reducer';
import thunk from 'redux-thunk';
import { uiReducer } from '../reducers/ui.reducer';
import { notesReducer } from '../reducers/notes.reducer';

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  notes: notesReducer,
});

const composeEnhancers =
  (typeof (window as any) !== 'undefined' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
