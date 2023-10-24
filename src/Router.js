import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Delivery from './pages/Delivery/Delivery';
import Login from './pages/Login/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
