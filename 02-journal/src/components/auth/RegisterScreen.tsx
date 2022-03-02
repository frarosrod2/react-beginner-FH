import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form>
        <input className="auth__input" type="text" placeholder="email" name="email" />
        <input className="auth__input" type="text" placeholder="name" name="name" />
        <input
          className="auth__input"
          type="text"
          placeholder="password"
          name="password"
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Confirm password"
          name="password2"
          autoComplete="off"
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
