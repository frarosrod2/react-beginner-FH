import { Routes, Route, Navigate } from 'react-router-dom';
import { CalendarPage } from '../pages/CalendarPage';

export const DashboardRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="*" element={<Navigate to="/calendar" />} />
      </Routes>
    </>
  );
};
