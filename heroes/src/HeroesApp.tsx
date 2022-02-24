import { AuthContext } from './auth/authContext';
import { AppRouter } from './routers/AppRouter';
import { authReducer } from './auth/authReducer';
import { useEffect, useReducer } from 'react';

export const HeroesApp = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem('user') || 'null') || { logged: false };
  };

  const [user, dispatch] = useReducer(authReducer, { name: 'Paco2' }, init);

  useEffect(() => {
    if (!user) return;
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        dispatch,
      }}>
      <AppRouter />;
    </AuthContext.Provider>
  );
};
