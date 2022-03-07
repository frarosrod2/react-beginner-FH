import { AuthType } from '../types/auth.types';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../firebase/firebase-config';
import { startLoading, finishLoading } from './ui.actions';
import Swal from 'sweetalert2';

export const startLoginEmailPassword = (email: string, password: string) => {
  return (dispatch: any) => {
    dispatch(startLoading());

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }: any) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch((err: any) => {
        dispatch(finishLoading());
        Swal.fire('Error', err.message, 'error');
      });
  };
};

export const signInFirebase = () => {
  return (dispatch: any) => {
    const googleProvider = new GoogleAuthProvider();
    dispatch(startLoading());

    signInWithPopup(auth, googleProvider)
      .then(({ user }: any) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch((err: any) => {
        dispatch(finishLoading());
        console.log('error', err.code);
      });
  };
};

export const startRegister = (email: string, password: string, name: string) => {
  return (dispatch: any) => {
    dispatch(startLoading());
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }: any) => {
        await updateProfile(user, { displayName: name });
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch((err: any) => {
        dispatch(finishLoading());
        console.log('error', err.code);
      });
  };
};

export const startLogout = () => {
  return async (dispatch: any) => {
    await signOut(auth);
    dispatch(logout());
  };
};

export const login = (uid: any, displayName: string) => ({
  type: AuthType.LOGIN,
  payload: { uid, displayName },
});
export const logout = () => ({
  type: AuthType.LOGOUT,
});
