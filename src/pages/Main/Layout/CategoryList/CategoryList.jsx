import React from 'react';
import Category from '../../../../components/Category/Category';
import './CategoryList.scss';

const CategoryList = () => {
  const categoryList = [
    {
      id: 1,
      text: '종합',
      subType: 'basic',
    },
    {
      id: 2,
      text: '창작적',
      subType: 'creative',
    },
    {
      id: 3,
      text: '수집성',
      subType: 'collection',
    },
  ];

  return (
    <div className="categoryList">
      {categoryList.map(list => (
        <Category
          key={`${list.id}categoryList`}
          text={list.text}
          subType={list.subType}
        />
      ))}
    </div>
  );
};

export default CategoryList;
