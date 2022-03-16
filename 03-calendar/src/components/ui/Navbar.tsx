import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../interfaces/rootState.interfaces';
import { logout, startLogout } from '../../store/actions/auth.actions';

export const Navbar = () => {
  const { name } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand">{name}</span>
      <button className="btn btn-outline-danger">
        <i className="fas fa-sign-out-alt"></i>
        <span onClick={handleLogout}>Salir</span>
      </button>
    </div>
  );
};
