import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Delivery from './pages/Delivery/Delivery';
import Login from './pages/Login/Login';
import PayComplete from './pages/PayComplete/PayComplete';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Routes>
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/" element={<Login />} />
          <Route path="/payComplete" element={<PayComplete />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
