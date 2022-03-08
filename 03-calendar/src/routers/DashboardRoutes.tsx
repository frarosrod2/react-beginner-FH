import { Routes, Route, Navigate } from 'react-router-dom';
import { PrivatePage } from '../pages/PrivatePage';

export const DashboardRouter = () => {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/private" element={<PrivatePage />} />
          <Route path="*" element={<Navigate to="/private" />} />
        </Routes>
      </div>
    </>
  );
};
