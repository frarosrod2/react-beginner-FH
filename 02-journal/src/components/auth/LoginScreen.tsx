import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from '../../hooks/useform';
import { signInFirebase, startLoginEmailPassword } from '../../actions/auth.actions';

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: any) => state.ui);

  const [formValues, handleInputChange]: any = useForm({
    email: 'nando@gmail.com',
    password: '123456',
  });

  const { email, password }: any = formValues;

  const handleLogin: any = (e: Event) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogleLogin: any = (e: Event) => {
    dispatch(signInFirebase());
  };

  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin}>
        <input
          className="auth__input"
          type="text"
          placeholder="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="text"
          placeholder="password"
          name="password"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
          Login
        </button>
        <hr />
        <div className="auth_social-network">
          <p>Login with social network</p>
          <div className="google-btn mt-1" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text mt-5">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link to="/auth/register" className="link">
          Create new account
        </Link>
      </form>
    </>
  );
};
