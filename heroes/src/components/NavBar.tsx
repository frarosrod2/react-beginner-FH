import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';
import { useContext } from 'react';
import { AuthType } from '../types/auth';

export const Navbar = () => {
  const navigate = useNavigate();
  const { dispatch }: any = useContext(AuthContext);

  const handleLogout = () => {
    const action = {
      type: AuthType.LOGOUT,
    };
    dispatch(action);

    navigate('/login', {
      replace: true,
    });
  };

  const { user }: any = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className="nav-item nav-link"
            // className={(isActive) => {
            //   return 'nav-item nav-link' + (isActive ? 'active' : '');
            // }}
            to="/marvel">
            Marvel
          </NavLink>
          <NavLink className="nav-item nav-link" to="/dc">
            DC
          </NavLink>
          <NavLink className="nav-item nav-link" to="/hero">
            Hero
          </NavLink>
          <NavLink className="nav-item nav-link" to="/search">
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">{user.name}</span>
          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
