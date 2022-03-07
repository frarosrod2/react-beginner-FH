import { UiType } from '../types/ui.types';

export const setError = (err: any) => ({
  type: UiType.SET_ERROR,
  payload: err,
});
export const removeError = () => ({
  type: UiType.REMOVE_ERROR,
});
export const startLoading = () => ({
  type: UiType.START_LOADING,
});
export const finishLoading = () => ({
  type: UiType.FINISH_LOADING,
});
