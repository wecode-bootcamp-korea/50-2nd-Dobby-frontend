import React from 'react';

import './CategorizedSlide.scss';
import Carousel from '../../../../components/Carousel/Carousel';
import CategoryTitle from '../CategoryTitle/CategoryTitle';

const CategorizedSlide = () => {
  return (
    <div className="categorizedSlide">
      <CategoryTitle />
      <Carousel />
    </div>
  );
};

export default CategorizedSlide;
