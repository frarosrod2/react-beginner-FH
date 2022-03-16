import { useDispatch } from 'react-redux';
import 'sweetalert2/dist/sweetalert2.css';
import Swal from 'sweetalert2';

import { useForm } from '../hooks/useForm';
import {  UserRegister } from '../interfaces/user.interface';
import { startLogin, startRegister } from '../store/actions/auth.actions';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [formRegisterValues, handleRegisterInputChange]: any = useForm({
    rName: 'Paco',
    rEmail: 'fernan@gmail.com',
    rPassword1: 'Fernando',
    rPassword2: 'Fernando',
  } as UserRegister);

  const [formLoginValues, handleLoginInputChange]: any = useForm({
    lEmail: 'fernan@gmail.com',
    lPassword: 'Fernando',
  });

  const { lEmail, lPassword }: any = formLoginValues;
  const { rName, rEmail, rPassword1, rPassword2 }: any = formRegisterValues;

  const handleLogin = (e: any) => {
    e.preventDefault();
    dispatch(startLogin(lEmail, lPassword));
    navigate('/');
  };

  const handleRegister = (e: any) => {
    e.preventDefault();
    if (rPassword1 !== rPassword2) {
      return Swal.fire('Error', 'Las contraseñas no coinciden', 'error');
    }
    dispatch(startRegister(rEmail, rPassword1, rName));
    navigate('/');
  };

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Ingreso</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
                name="lEmail"
                value={lEmail}
                onChange={handleLoginInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="lPassword"
                value={lPassword}
                onChange={handleLoginInputChange}
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="rName"
                value={rName}
                onChange={handleRegisterInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name="rEmail"
                value={rEmail}
                onChange={handleRegisterInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="rPassword1"
                value={rPassword1}
                onChange={handleRegisterInputChange}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
                name="rPassword2"
                value={rPassword2}
                onChange={handleRegisterInputChange}
              />
            </div>

            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
