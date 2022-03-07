import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ isLoggedIn, children }: any) => {
  const { pathname, search } = useLocation();
  localStorage.setItem('lastPath', pathname + search);

  return isLoggedIn ? children : <Navigate to={'/auth/login'} />;
};
