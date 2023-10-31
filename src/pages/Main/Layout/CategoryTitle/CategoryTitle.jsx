import React from 'react';
import './CategoryTitle.scss';

const CategoryTitle = ({ title, subTitle, subType }) => {
  return (
    <div className="categoryTitle">
      <img
        src={`images/icon_${subType}.svg`}
        alt={subType}
        className={`titleImg ${subType}`}
      />
      <div className="titleWrapper">
        <h1 className="slideTitle">{title}</h1>
        <h3 className="slideSubTitle">{subTitle}</h3>
      </div>
    </div>
  );
};

export default CategoryTitle;
