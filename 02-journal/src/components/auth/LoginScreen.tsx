import { Link } from 'react-router-dom';

export const LoginScreen = () => {
  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form>
        <input className="auth__input" type="text" placeholder="email" name="email" />
        <input
          className="auth__input"
          type="text"
          placeholder="password"
          name="password"
          autoComplete="off"
        />
        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>
        <hr />
        <div className="auth_social-network">
          <p>Login with social network</p>
          <div className="google-btn mt-1">
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
