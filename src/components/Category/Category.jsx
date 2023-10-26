import React from 'react';
import './Category.scss';

const Category = ({ src, text }) => {
  return (
    <div className="category">
      <img src={src} alt={text} />
      <p>{text}</p>
    </div>
  );
};

export default Category;
