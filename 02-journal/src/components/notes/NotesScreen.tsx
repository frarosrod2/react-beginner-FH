import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useform';
import { NotesAppBar } from './NotesAppBar';
import { activeNote, startDeleting } from '../../actions/notes.actions';

export const NotesScreen = () => {
  const dispatch = useDispatch();
  const { active: note } = useSelector((state: any) => state.notes);
  const [formValues, handleInputChange, reset]: any = useForm(note);
  const { id, body, title, url } = formValues;

  const activeId = useRef(note.url);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(id, { ...formValues }));
  }, [formValues, dispatch, url]);

  const handleDelete = () => {
    dispatch(startDeleting(id));
  };

  return (
    <div className="notes__main-content">
      <NotesAppBar reset={reset} />
      <div className="notes__content">
        <input
          type="text"
          name="title"
          placeholder="Some title"
          className="notes__title-input"
          value={title}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <textarea
          name="body"
          placeholder="What happened"
          className="text__area"
          value={body}
          onChange={handleInputChange}></textarea>
        {note.url && (
          <div className="notes__image">
            <img src={note.url} alt="landscape" />
          </div>
        )}
      </div>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
