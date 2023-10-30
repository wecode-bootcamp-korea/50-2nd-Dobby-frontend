import React from 'react';
import Category from '../../../../components/Category/Category';
import './CategoryList.scss';

const CategoryList = ({ menuList }) => {
  return (
    <div className="categoryList">
      {menuList.map(list => (
        <Category
          key={`${list.id}categoryList`}
          text={list.name}
          subType={list.subType}
          id={list.id}
        />
      ))}
    </div>
  );
};

export default CategoryList;
