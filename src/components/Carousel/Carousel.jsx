import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import ProductCard from '../ProductCard/ProductCard';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation={true}
      slidesPerView={4}
      spaceBetween={50}
      loop={true}
      className="carousel"
    >
      <SwiperSlide>
        <ProductCard
          src="https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/thumbnail/0tUF-1650544574118-1.jpg"
          title="111111111 와인"
          price="20,000"
          rating="4.8"
          reviewCount="120"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard
          src="https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/thumbnail/0tUF-1650544574118-1.jpg"
          title="222222222와인"
          price="20,000"
          rating="4.8"
          reviewCount="120"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard
          src="https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/thumbnail/0tUF-1650544574118-1.jpg"
          title="3333333와인"
          price="20,000"
          rating="4.8"
          reviewCount="120"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard
          src="https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/thumbnail/0tUF-1650544574118-1.jpg"
          title="4444444와인"
          price="20,000"
          rating="4.8"
          reviewCount="120"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard
          src="https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/thumbnail/0tUF-1650544574118-1.jpg"
          title="마지막 와인"
          price="20,000"
          rating="4.8"
          reviewCount="120"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard
          src="https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/thumbnail/0tUF-1650544574118-1.jpg"
          title="마지막 와인"
          price="20,000"
          rating="4.8"
          reviewCount="120"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
