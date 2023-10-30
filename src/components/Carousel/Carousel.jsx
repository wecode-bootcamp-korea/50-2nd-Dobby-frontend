import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';
import ProductCard from '../ProductCard/ProductCard';
import PrevBtn from './PrevBtn';
import NextBtn from './NextBtn';
import 'swiper/css';
import 'swiper/css/navigation';
import './Carousel.scss';

const Carousel = ({ slideList, spaceBetween, slidesPerView, loop }) => {
  return (
    <div className="carousel">
      <Swiper
        modules={[Autoplay, A11y]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={loop}
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
