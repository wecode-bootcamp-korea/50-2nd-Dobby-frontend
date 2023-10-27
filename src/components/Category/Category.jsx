import React from 'react';
import './Category.scss';

const Category = ({ src, text, handleCategory }) => {
  return (
    <div className="category" onClick={handleCategory}>
      <img src={src} alt={text} />
      <p>{text}</p>
    </div>
  );
};

export default Category;
