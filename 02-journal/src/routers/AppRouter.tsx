import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { LoginScreen } from '../components/auth/LoginScreen';
import { JournalScreen } from '../components/journal/JournalScreen';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<AuthRouter />} />
        <Route path="/*" element={<JournalScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
