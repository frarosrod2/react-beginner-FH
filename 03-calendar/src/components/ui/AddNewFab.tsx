import React from 'react';
import { useDispatch } from 'react-redux';
import { modalUiOpen } from '../../store/actions/modalUi.actions';

export const AddNewFab = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(modalUiOpen());
  };

  return (
    <button className="btn btn-primary fab" onClick={openModal}>
      <i className="fas fa-plus"></i>
    </button>
  );
};
