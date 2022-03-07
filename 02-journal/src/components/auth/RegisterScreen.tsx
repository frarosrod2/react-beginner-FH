import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useform';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { setError, removeError } from '../../actions/ui.actions';
import { startRegister } from '../../actions/auth.actions';

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state: any) => state.ui);

  const [formValues, handleInputChange]: any = useForm({
    name: 'Paco',
    email: 'nando@gmail.com',
    password: '123456',
    password2: '123456',
  });

  const { email, name, password, password2 }: any = formValues;

  const handleRegister: any = (event: Event) => {
    event.preventDefault();

    if (isFormValid()) dispatch(startRegister(email, password, name));
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError('Name incorrect'));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Email incorrect'));

      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(setError('Password incorrect'));
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}
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
          placeholder="name"
          name="name"
          value={name}
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
        <input
          className="auth__input"
          type="text"
          placeholder="Confirm password"
          name="password2"
          autoComplete="off"
          value={password2}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>
        <Link to="/auth/login" className="link mt-5">
          Already registered
        </Link>
      </form>
    </>
  );
};
