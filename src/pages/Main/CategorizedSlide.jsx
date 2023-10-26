import React from 'react';

import './CategorizedSlide.scss';
import Category from '../../components/Category/Category';
import Carousel from '../../components/Carousel/Carousel';

const CategorizedSlide = () => {
  return (
    <div className="categorizedSlide">
      <div className="categoriContainer">
        <Category
          src="https://www.sooldamhwa.com/images/modules/damhwaMarket/category/icon_gift.png"
          text="종합"
        />
        <Category
          src="https://www.sooldamhwa.com/symbols/objects/icon/style2/flat/clock.wall.svg"
          text="창작적"
        />
        <Category
          src="https://www.sooldamhwa.com/images/modules/damhwaMarket/category/icon_only_sooldamhwa.png"
          text="수집성"
        />
      </div>
      <div className="productContainer">
        <h1>가을에도 나를 위한 시간</h1>
        <h3>담화박스로 찾아보는 인생술이에요.</h3>
        <Carousel />
      </div>
    </div>
  );
};

export default CategorizedSlide;
