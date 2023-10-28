import React from 'react';
import Category from '../../../../components/Category/Category';
import './CategoryList.scss';

const CategoryList = () => {
  const categoryList = [
    {
      text: '종합',
      subType: 'basic',
    },
    {
      text: '창작적',
      subType: 'creative',
    },
    {
      text: '수집성',
      subType: 'collection',
    },
  ];

  return (
    <div className="categoryList">
      {categoryList.map((list, index) => (
        <Category key={index} text={list.text} subType={list.subType} />
      ))}
    </div>
  );
};

export default CategoryList;
