import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import Cart from './pages/Cart/Cart';
import Delivery from './pages/Delivery/Delivery';
import Login from './pages/Login/Login';
import Detail from './pages/Detail/Detail';
import Main from './pages/Main/Main';
import Payment from './pages/Payment/Payment';
import Nav from './components/Nav/Nav';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/main" element={<Main />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
