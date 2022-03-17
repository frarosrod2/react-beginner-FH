import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { fetchSinToken, fetchConToken } from '../../helpers/fetch';
import { User } from '../../interfaces/user.interface';
import { AuthType } from '../../types/auth.types';
import { eventLogout } from './events.actions';

export const startLogin = (email: string, password: string) => {
  return async (dispatch: any) => {
    const resp = await fetchSinToken('auth', { email, password }, 'POST');
    const body = await resp.json();
    if (body.ok) {
      processBody(body);
      dispatch(
        login({
          checking: false,
          uid: body.uid,
          name: body.name,
        })
      );
    } else {
      Swal.fire('Error', body.msg, 'error');
    }
  };
};

export const startRegister = (email: string, password: string, name: string) => {
  return async (dispatch: any) => {
    const resp = await fetchSinToken('auth/new', { email, password, name }, 'POST');
    const body = await resp.json();
    if (body.ok) {
      processBody(body);
      dispatch(
        login({
          checking: false,
          uid: body.uid,
          name: body.name,
        })
      );
    } else {
      Swal.fire('Error', body.msg, 'error');
    }
  };
};

export const startChecking = () => {
  return async (dispatch: any) => {
    const resp = await fetchConToken('auth/renew');
    const body = await resp.json();
    if (body.ok) {
      processBody(body);
      dispatch(
        login({
          checking: false,
          uid: body.uid,
          name: body.name,
        })
      );
    } else {
      dispatch(checkingFinish());
    }
  };
};

export const startLogout = () => {
  return (dispatch: any) => {
    localStorage.clear();
    dispatch(logout());
    dispatch(eventLogout());
  };
};

const checkingFinish = () => ({
  type: AuthType.AUTH_CHECKING_FINISH,
});

const processBody = (body: any) => {
  localStorage.setItem('token', body.token);
  localStorage.setItem('token-init-date', new Date().getTime().toString());
};

const login = (user: User) => ({
  type: AuthType.AUTH_LOGIN,
  payload: user,
});
export const logout = () => ({
  type: AuthType.AUTH_LOGOUT,
});
