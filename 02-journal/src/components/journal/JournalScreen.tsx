import React from 'react';
import { Sidebar } from './Sidebar';
import { NothingSelected } from './NothingSelected';
import { NotesScreen } from '../notes/NotesScreen';
import { useSelector } from 'react-redux';

export const JournalScreen = () => {
  const { active } = useSelector((state: any) => state.notes);

  return (
    <div className="journal__main-content">
      <Sidebar />
      <main>{active ? <NotesScreen /> : <NothingSelected />}</main>
    </div>
  );
};
