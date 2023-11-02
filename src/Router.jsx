import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Nav from './components/Nav/Nav';
import Cart from './pages/Cart/Cart';
import Delivery from './pages/Delivery/Delivery';
import Login from './pages/Login/Login';
import Detail from './pages/Detail/Detail';
import Main from './pages/Main/Main';
import PayComplete from './pages/PayComplete/PayComplete';
import Payment from './pages/Payment/Payment';
import Signup from './pages/Signup/Signup';
import Store from './pages/Store/Store';
import FindPW from './pages/FindPW/FindPW';
import FindID from './pages/FindID/FindID';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/findpw" element={<FindPW />} />
          <Route path="/findid" element={<FindID />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/detail/:productId" element={<Detail />} />
          <Route path="/main" element={<Main />} />
          <Route path="/store" element={<Store />} />
          <Route path="/pay-complete" element={<PayComplete />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
