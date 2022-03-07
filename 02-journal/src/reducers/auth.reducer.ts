import { AuthAction, AuthType } from '../types/auth.types';

const initialState = {
  uid: '',
  name: '',
};

export const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case AuthType.LOGIN:
      return {
        ...state,
        uid: action.payload.uid,
        name: action.payload.displayName,
      };
    case AuthType.LOGOUT:
      return {};
    default:
      return state;
  }
};
