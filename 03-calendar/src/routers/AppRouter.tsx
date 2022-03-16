import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LoginPage } from '../pages/LoginPage';
import { PrivateRoute } from './PrivateRoute';
import { DashboardRouter } from './DashboardRoutes';
import { PublicRoute } from './PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { startChecking } from '../store/actions/auth.actions';
import { useEffect } from 'react';
import { RootState } from '../interfaces/rootState.interfaces';

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, uid } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (checking) {
    return <h5>Espere...</h5>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute isAuthenticated={!!uid}>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute isAuthenticated={!!uid}>
              <DashboardRouter />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
