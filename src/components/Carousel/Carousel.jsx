import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';
import ProductCard from '../ProductCard/ProductCard';

import 'swiper/css';
import 'swiper/css/navigation';
import './Carousel.scss';
import NextBtn from './NextBtn';
import PrevBtn from './PrevBtn';

const Carousel = ({ slideList }) => {
  return (
    <div className="carousel">
      <Swiper
        modules={[Autoplay, A11y]}
        spaceBetween={10}
        slidesPerView={4}
        // loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {slideList &&
          slideList.map(list => (
            <SwiperSlide key={`slideLIst${list.id}`}>
              <ProductCard
                src={list.image}
                title={list.name}
                price={list.price}
                rating={list.sales}
                reviewCount={list.sales}
                content={list.content}
              />
            </SwiperSlide>
          ))}
        <div className="btnWrapper">
          <PrevBtn />
          <NextBtn />
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
