import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }: any) => {
  const user = localStorage.getItem('user');

  return user ? <Navigate to={'/private'} /> : children;
};
