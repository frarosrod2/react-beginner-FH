import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';

export const PrivateRoute = ({ children }: any) => {
  const { user }: any = useContext(AuthContext);

  return user.logged ? children : <Navigate to={'/login'} />;
};
