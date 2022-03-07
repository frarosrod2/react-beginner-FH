export enum AuthType {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

export interface AuthAction {
  type: AuthType;
  payload: any;
}
