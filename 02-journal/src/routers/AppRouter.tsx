import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth.actions';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { AuthRouter } from './AuthRouter';
import { startLoadingNotes } from '../actions/notes.actions';

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, async (user: any) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
        dispatch(startLoadingNotes(user.uid));
      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking]);

  if (checking) {
    return <h3>Espere...</h3>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth/*"
          element={
            <PublicRoute isLoggedIn={isLoggedIn}>
              <AuthRouter />
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <JournalScreen />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
