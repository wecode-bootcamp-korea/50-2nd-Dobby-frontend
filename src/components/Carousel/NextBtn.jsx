import React from 'react';
import { useSwiper } from 'swiper/react';
import './NextBtn.scss';

const NextBtn = () => {
  const swiper = useSwiper();
  return (
    <button className="next" onClick={() => swiper.slideNext()}>
      &lt;
    </button>
  );
};

export default NextBtn;
