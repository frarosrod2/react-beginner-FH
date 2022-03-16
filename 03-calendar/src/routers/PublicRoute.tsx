import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ isAuthenticated, children }: any) => {
  return isAuthenticated ? <Navigate to={'/'} /> : children;
};
