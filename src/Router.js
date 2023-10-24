import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
