import { useContext } from 'react';

import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }: any) => {
  const item = localStorage.getItem('user');

  return item ? children : <Navigate to="/login" />;
};
