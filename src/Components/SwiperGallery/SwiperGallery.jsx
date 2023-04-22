import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import swiperGalleryData from "./SwiperData";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './SwiperGallery.css'


// import required modules
import { Pagination, Navigation,Autoplay } from "swiper";

export default function SwiperGallery() {

    const [swGallery,setSwGallery] = useState(swiperGalleryData)


  return (
    <div className="swiper-container">
      <Swiper
      
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper"
      >

        {swGallery && (
            swGallery.map(swip => (
                
                <SwiperSlide key={swip.id}>
                    <img src={swip.img} alt="" />
                </SwiperSlide>
            ))
        )}
       
      
      </Swiper>
    </div>
  );
}