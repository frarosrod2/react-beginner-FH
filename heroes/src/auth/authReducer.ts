import { AuthType, AuthAction } from '../types/auth';

const initialState = {
  name: 'a',
};

export const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case AuthType.LOGIN:
      console.log('action.payload', action.payload);
      return {
        ...action.payload,
        logged: true,
      };
    case AuthType.LOGOUT:
      return {
        ...action.payload,
        logged: false,
      };

    default:
      return state;
  }
};
