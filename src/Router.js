import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cart from './pages/Cart/Cart';
import Delivery from './pages/Delivery/Delivery';
import Login from './pages/Login/Login';
import Detail from './pages/Detail/Detail';
import Payment from './pages/Payment/Payment';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
//<Route path="/detail/:id" element={<Detail />} />
