
import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom'
import swiperBrandsData from './SwiperBrandsSliderData'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "./SwiperBrandsSlider.css"


// import required modules
import { FreeMode,Navigation } from "swiper";



export default function SwiperBrandsSlider({title}) {

    const [brandsData,setBrandsData] = useState(swiperBrandsData)


    return (
      <div className="SwiperBrandsSlider-container">
      <div className="brands-slider-header">
      <h4 className="brands-slider-title">{title}</h4>
      </div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={0}
        freeMode={true}
        navigation={true}
        modules={[FreeMode,Navigation]}
        className="mySwiper"
        style={{padding:"0 10px"}}
        breakpoints={{
          640: {
            slidesPerView: 4
          },
          768: {
            slidesPerView: 5
          },
          991: {
            slidesPerView: 6
          },
          1200: {
            slidesPerView: 8
          },
          1400: {
            slidesPerView: 8
          }
        }}
      >
  
          {brandsData.length && (
              brandsData.map(brand => (
  
                  <SwiperSlide key={brand.id}>
                    <Link to="#">
                    <img className="img-fluid" src={brand.img} alt="" />
                    </Link>
                  </SwiperSlide>
              ))
          )}
        
      </Swiper>
    </div>
    )
}
