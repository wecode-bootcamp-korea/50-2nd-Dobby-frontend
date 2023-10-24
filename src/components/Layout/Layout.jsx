import React from 'react';
import './Layout.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <section className="contentsArea">{children}</section>
      <Footer />
    </div>
  );
};

export default Layout;
