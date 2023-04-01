import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";
import Hero1 from './Heros/Hero1';
import Hero2 from './Heros/Hero2';
import Hero4 from './Heros/Hero4';
import Hero3 from './Heros/Hero3';
import Hero5 from './Heros/Hero5';


const Hero = () => {
  return (
    <div className='heros'>
        <div>
        <>
        <Swiper pagination={true} 
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]} 
                className="mySwiper">
          <SwiperSlide><Hero1/></SwiperSlide>
          <SwiperSlide><Hero3/></SwiperSlide>
          <SwiperSlide><Hero4/></SwiperSlide>
          <SwiperSlide><Hero5/></SwiperSlide>
          <SwiperSlide><Hero2/></SwiperSlide>
        </Swiper>
      </>      
        </div>
    </div>
  )
}

export default Hero;
