import { useContext } from 'react';

import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }: any) => {
  // const item = localStorage.getItem('user');

  return true ? children : <Navigate to="/login" />;
};
