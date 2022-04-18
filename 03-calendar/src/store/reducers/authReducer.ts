import { Action } from '../../interfaces/actions.interfaces';
import { User } from '../../interfaces/user.interface';
import { AuthType } from '../../types/auth.types';

const initialState: User = {
  checking: true,
  uid: null,
  name: null,
};

export const authReducer = (state = initialState, action: Action<AuthType, any>) => {
  switch (action.payload) {
    case AuthType.AUTH_LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    case AuthType.AUTH_CHECKING_FINISH:
      return {
        ...state,
        checking: false,
      };
    case AuthType.AUTH_LOGOUT:
      return {
        checking: false,
      };

    default:
      return state;
  }
};
