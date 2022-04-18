import Modal from 'react-modal';
import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { useDispatch, useSelector } from 'react-redux';

import { modalUiClose } from '../../store/actions/modalUi.actions';
import {
  eventClearActiveNote,
  eventStartAddNew,
  eventUpdate,
} from '../../store/actions/events.actions';
import { EventCal } from '../../interfaces/event.interfaces';
import { eventStartUpdate } from '../../store/actions/events.actions';
import { RootState } from '../../store/store';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const now: any = moment().minutes(0).seconds(0).add(1, 'hours');
const nowPlus1 = now.clone().add(1, 'hours');

const initEvent: EventCal = {
  id: new Date().getTime(),
  title: 'Evento',
  notes: '',
  start: now.toDate(),
  end: nowPlus1.toDate(),
};

export const CalendarModal = () => {
  const dispatch = useDispatch();
  const { modalOpen } = useSelector((state: RootState) => state.modalUi);
  const { activeEvent } = useSelector((state: RootState) => state.calendar);

  const [dateStart, setDateStart] = useState(now.toDate());
  const [dateEnd, setDateEnd] = useState(nowPlus1.toDate());
  const [formValues, setFormValues] = useState(initEvent);
  const [titleValid, setTitleValid] = useState(true);

  const { notes, title, start, end } = formValues;

  useEffect(() => {
    if (activeEvent) {
      setFormValues(activeEvent);
    } else {
      setFormValues(initEvent);
    }
  }, [activeEvent, setFormValues]);

  const handleInputChange = ({ target }: any) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const closeModal = () => {
    dispatch(modalUiClose());
    dispatch(eventClearActiveNote());
    setFormValues(initEvent);
  };

  const handleStartDate: any = (e: any) => {
    setDateStart(e._d);
    setFormValues({
      ...formValues,
      start: e._d,
    });
  };
  const handleEndDate: any = (e: any) => {
    setDateEnd(e._d);
    setFormValues({
      ...formValues,
      end: e._d,
    });
  };

  const handleSubmitForm: any = (e: Event) => {
    e.preventDefault();
    const momentStart = moment(start);
    const momentEnd = moment(end);

    if (momentStart.isSameOrAfter(momentEnd)) {
      return Swal.fire(
        'Error',
        'La fecha fin debe ser mayor a la fecha de inicio',
        'error'
      );
    }
    if (title.trim().length < 2) {
      return setTitleValid(false);
    }

    if (activeEvent) {
      dispatch(eventStartUpdate(formValues));
    } else {
      dispatch(eventStartAddNew(formValues));
    }
    setTitleValid(true);
    closeModal();
  };

  const valid = (current: any) => {
    return current.isAfter(moment(dateStart).subtract(1, 'day'));
  };

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      overlayClassName="modal-fondo"
      className="modal">
      <h1>{activeEvent ? 'Editar evento' : 'Añadir evento'}</h1>
      <hr />
      <form className="container" onSubmit={handleSubmitForm}>
        <div className="form-group">
          <label>Fecha y hora inicio</label>
          <DatePicker
            onChange={handleStartDate}
            value={start}
            dateFormat="DD-MM-YYYY"
            timeFormat="hh:mm A"
            // className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Fecha y hora fin</label>
          <DatePicker
            onChange={handleEndDate}
            value={end}
            isValidDate={valid}
            dateFormat="DD-MM-YYYY"
            timeFormat="hh:mm A"
            // className="form-control"
          />
        </div>
        <hr />
        <div className="form-group">
          <label>Titulo y notas</label>
          <input
            type="text"
            className={`form-control ${!titleValid && 'is-invalid'}`}
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={title}
            onChange={handleInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Notas"
            rows={5}
            name="notes"
            value={notes}
            onChange={handleInputChange}></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>
        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
