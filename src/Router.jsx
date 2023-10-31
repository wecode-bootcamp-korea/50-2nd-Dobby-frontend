import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Layout from './components/Layout/Layout';
import Nav from './components/Nav/Nav';
import Cart from './pages/Cart/Cart';
import Delivery from './pages/Delivery/Delivery';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import PayComplete from './pages/PayComplete/PayComplete';
import Payment from './pages/Payment/Payment';
import FindID from './pages/FindID/FindID';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/findid" element={<FindID />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/main" element={<Main />} />
          <Route path="/pay-complete" element={<PayComplete />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
