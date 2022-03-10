import { useDispatch } from 'react-redux';
import { eventDelete } from '../../store/actions/events.actions';

export const DeleteEventFab = () => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(eventDelete());
  };

  return (
    <button className="btn btn-danger fab-danger" onClick={handleDelete}>
      <i className="fas fa-trash"></i>
      <span>Borrar</span>
    </button>
  );
};
