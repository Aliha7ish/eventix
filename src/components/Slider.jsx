/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function Slider({ className }) {
  return (
    <Swiper
      modules={[FreeMode, Pagination]}
      slidesPerView={3.8}
      spaceBetween={15}
      grabCursor={true}
      freeMode={true}
      pagination={{
        clickable: false,
      }}
      className={`slider-container ${className}`}
    >
      {/* {array.map((item) => {
        return <SwiperSlide key={item}></SwiperSlide>;
      })} */}
      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide> */}
    </Swiper>
  );
}
