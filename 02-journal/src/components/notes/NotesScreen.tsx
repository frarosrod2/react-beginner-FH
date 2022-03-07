import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useform';
import { NotesAppBar } from './NotesAppBar';

export const NotesScreen = () => {
  const { active: note } = useSelector((state: any) => state.notes);
  const [formValues, handleInputChange]: any = useForm(note);
  const { body, title } = formValues;

  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some title"
          className="notes__title-input"
          value={title}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <textarea
          placeholder="What happened"
          className="text__area"
          value={body}
          onChange={handleInputChange}></textarea>
        {note.url && (
          <div className="notes__image">
            <img
              src="https://cdn.pixabay.com/photo/2019/12/11/21/18/landscape-4689328_960_720.jpg"
              alt="landscape"
            />
          </div>
        )}
      </div>
    </div>
  );
};
