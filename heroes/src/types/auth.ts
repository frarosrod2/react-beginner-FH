export enum AuthType {
  LOGIN = '[Auth] Login',
  LOGOUT = '[Auth] Logout',
}

export interface AuthAction {
  type: AuthType;
  payload: any;
}
