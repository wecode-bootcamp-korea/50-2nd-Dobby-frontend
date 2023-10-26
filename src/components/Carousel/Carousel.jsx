import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';
import ProductCard from '../ProductCard/ProductCard';
import { ProductList } from '../../pages/Main/ProductList';

import 'swiper/css';
import 'swiper/css/navigation';
import './Carousel.scss';
import NextBtn from './NextBtn';
import PrevBtn from './PrevBtn';

const Carousel = () => {
  return (
    <div className="carousel">
      <Swiper
        modules={[Autoplay, A11y]}
        spaceBetween={10}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {ProductList.map((list, index) => (
          <SwiperSlide key={index}>
            <ProductCard
              src={list.src}
              title={list.title}
              price={list.price}
              rating={list.rating}
              reviewCount={list.reviewCount}
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
