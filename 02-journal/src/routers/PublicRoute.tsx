import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ isLoggedIn, children }: any) => {
  return !isLoggedIn ? children : <Navigate to={'/'} />;
};
