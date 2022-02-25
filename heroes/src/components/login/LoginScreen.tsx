import { useNavigate } from 'react-router-dom';
import { AuthType } from '../../types/auth';
import { useContext } from 'react';
import { AuthContext } from '../../auth/authContext';

export const LoginScreen = () => {
  const navigate = useNavigate();
  const { dispatch }: any = useContext(AuthContext);

  const handleLogin = () => {
    const action = {
      type: AuthType.LOGIN,
      payload: {
        name: 'frarosrod2',
      },
    };

    dispatch(action);
    const lastPath = localStorage.getItem('lastPath') || '/marvel';
    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
