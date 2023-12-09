import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './style.css'
import banner2 from './images/homeBanner2.jpg'
import banner4 from './images/homeBanner4.jpg'
import banner5 from './images/homeBanner5.jpg'
import banner7 from './images/homeBanner7.jpg'
import banner9 from './images/homebanner9.jpg'
import banner10 from './images/homebanner10.jpg'
import banner12 from './images/homebanner12.jpg'
import banner15 from './images/homebanner15.jpg'
import banner17 from './images/homebanner17.jpg'





// import required modules
import { Autoplay, Pagination } from "swiper";

export default function ImageSlider() {
  const posterImages = [
    banner2,banner4,banner5,banner7,banner9,banner10,banner12,banner15,banner17
  ]
  return (
    <>
      <Swiper
        direction={"horizontal"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
        
      >
        {posterImages.map((image,index) =>(
          <SwiperSlide key={index}>
              <img src={image}  alt="banner" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
