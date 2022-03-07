export enum UiType {
  SET_ERROR = '[UI] Set error',
  REMOVE_ERROR = '[UI] Remove error',
  START_LOADING = '[UI] Start loading',
  FINISH_LOADING = '[UI] Finish loading',
}

export interface UiAction {
  type: UiType;
  payload: any;
}
