import React from 'react';
import Carousel from '../../../../components/Carousel/Carousel';
import CategoryTitle from '../CategoryTitle/CategoryTitle';
import './CategorizedSlide.scss';

const CategorizedSlide = ({ slideList, title, subTitle, subType }) => {
  return (
    <div className="categorizedSlide">
      <CategoryTitle title={title} subTitle={subTitle} subType={subType} />
      <Carousel
        slideList={slideList}
        spaceBetween={10}
        slidesPerView={4}
        loop={false}
      />
    </div>
  );
};

export default CategorizedSlide;
