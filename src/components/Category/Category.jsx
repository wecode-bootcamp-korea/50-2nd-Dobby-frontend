import React from 'react';
import './Category.scss';

const Category = ({ subType, text, handleCategory }) => {
  return (
    <div className="category" onClick={handleCategory}>
      <img
        src={`images/icon_${subType}.svg`}
        alt={text}
        className={`menu ${subType}`}
      />
      <p>{text}</p>
    </div>
  );
};

export default Category;
