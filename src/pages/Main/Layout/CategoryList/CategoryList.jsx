import React from 'react';
import Category from '../../../../components/Category/Category';
import './CategoryList.scss';

const CategoryList = () => {
  const categoryList = [
    {
      src: 'https://www.sooldamhwa.com/images/modules/damhwaMarket/category/icon_gift.png',
      text: '종합',
    },
    {
      src: 'https://www.sooldamhwa.com/symbols/objects/icon/style2/flat/clock.wall.svg',
      text: '창작적',
    },
    {
      src: 'https://www.sooldamhwa.com/images/modules/damhwaMarket/category/icon_only_sooldamhwa.png',
      text: '수집성',
    },
  ];

  return (
    <div className="categoryList">
      {categoryList.map((list, index) => (
        <Category key={index} src={list.src} text={list.text} />
      ))}
    </div>
  );
};

export default CategoryList;
