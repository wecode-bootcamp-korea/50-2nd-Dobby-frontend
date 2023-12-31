import React from 'react';
import { useSwiper } from 'swiper/react';
import './PrevBtn.scss';

const PrevBtn = () => {
  const swiper = useSwiper();
  return (
    <button className="prev" onClick={() => swiper.slidePrev()}>
      &lt;
    </button>
  );
};

export default PrevBtn;
