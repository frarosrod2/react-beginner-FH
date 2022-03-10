import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, activeNote, startUploading } from '../../actions/notes.actions';

export const NotesAppBar = ({ reset }: any) => {
  const dispatch = useDispatch();
  const { active: note } = useSelector((state: any) => state.notes);

  const handleSave = () => {
    dispatch(startSaveNote(note));
  };

  const handlePictureClick = () => {
    document.getElementById('fileSelector')?.click();
  };
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploading(file));
      reset(note);
    }
  };

  return (
    <div className="notes__appbar">
      <span>28 de agosto</span>
      <input
        id="fileSelector"
        type="file"
        name="file"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <div>
        <button className="btn" onClick={handlePictureClick}>
          Picture
        </button>
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
