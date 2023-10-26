import React from 'react';
import './CategoryTitle.scss';

const CategoryTitle = () => {
  return (
    <div className="categoryTitle">
      <img
        src="https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/origin/Z9vm-1696516717186-flower.sunflower.png"
        alt="titleImg"
      />
      <div className="titleWrapper">
        <h1 className="slideTitle">가을에도 나를 위한 시간</h1>
        <h3 className="slideSubTitle">담화박스로 찾아보는 인생술이에요.</h3>
      </div>
    </div>
  );
};

export default CategoryTitle;
