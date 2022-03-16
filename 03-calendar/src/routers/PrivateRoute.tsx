import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ isAuthenticated, children }: any) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};
