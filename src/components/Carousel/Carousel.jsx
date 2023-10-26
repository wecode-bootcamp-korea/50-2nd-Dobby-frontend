import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, A11y } from 'swiper/modules';
import ProductCard from '../ProductCard/ProductCard';
import { ProductList } from '../../pages/Main/ProductList';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = () => {
  return (
    <div>
      <Swiper
        modules={[Autoplay, Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
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
      </Swiper>
    </div>
  );
};

export default Carousel;
