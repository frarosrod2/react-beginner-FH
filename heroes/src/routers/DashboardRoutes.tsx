import React from 'react';
import { Navbar } from '../components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { Hero } from '../components/hero/Hero';

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MarvelScreen />} />
        <Route path="marvel" element={<MarvelScreen />} />
        <Route path="search" element={<SearchScreen />} />
        <Route path="dc" element={<DcScreen />} />
        <Route path="/hero/:id" element={<Hero />} />
      </Routes>
    </>
  );
};
