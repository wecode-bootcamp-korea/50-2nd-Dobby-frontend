import React from 'react';

import './CategorizedSlide.scss';
import Carousel from '../../../../components/Carousel/Carousel';
import CategoryTitle from '../CategoryTitle/CategoryTitle';

const CategorizedSlide = ({ slideList, title, subTitle, subType }) => {
  return (
    <div className="categorizedSlide">
      <CategoryTitle title={title} subTitle={subTitle} subType={subType} />
      <Carousel slideList={slideList} />
    </div>
  );
};

export default CategorizedSlide;
