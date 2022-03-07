import { UiState } from '../interfaces/ui.interface';
import { UiType } from '../types/ui.types';

const initialState: UiState = {
  loading: false,
  msgError: '',
};
export const uiReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UiType.SET_ERROR:
      return {
        ...state,
        msgError: action.payload,
      };
    case UiType.REMOVE_ERROR:
      return {
        ...state,
        msgError: null,
      };
    case UiType.START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case UiType.FINISH_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
