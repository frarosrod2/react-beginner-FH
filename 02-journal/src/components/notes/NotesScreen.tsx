import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useform';
import { NotesAppBar } from './NotesAppBar';
import { activeNote } from '../../actions/notes.actions';

export const NotesScreen = () => {
  const dispatch = useDispatch();
  const { active: note } = useSelector((state: any) => state.notes);
  console.log('note', note);
  const [formValues, handleInputChange, reset]: any = useForm(note);
  const { id, body, title, url } = formValues;
  console.log('url', url);

  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    console.log('formValues', formValues);
    dispatch(activeNote(id, { ...formValues }));
  }, [formValues, dispatch]);

  return (
    <div className="notes__main-content">
      <NotesAppBar />
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
    </div>
  );
};
