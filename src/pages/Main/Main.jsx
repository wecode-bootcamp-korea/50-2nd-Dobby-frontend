import React from 'react';
import './Main.scss';
import Subscribe from './Layout/Subscribe/Subscribe';
import CategorizedSlide from './Layout/CategorizedSlide/CategorizedSlide';
import CategoryList from './Layout/CategoryList/CategoryList';

const Main = () => {
  return (
    <div className="main">
      <Subscribe />
      <CategoryList />
      <CategorizedSlide />
    </div>
  );
};

export default Main;
