import React from 'react';
import './Category.scss';

const Category = ({ src, text }) => {
  return (
    <div className="category">
      <div className="container">
        <img src={src} alt={text} />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Category;
