import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

import "swiper/css/navigation";
import './SwiperProductSlider.css'
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { Link } from "react-router-dom";

// import required modules
import { FreeMode,Navigation } from "swiper";
import ProductCard from "../ProductCard/ProductCard";

import swiperProductData from "./SwiperProductSliderData";

export default function SwiperProductSlider({title}) {

    const [productCardData,setProductCardData] = useState(swiperProductData)


   
  return (
    <div className="SwiperProductSlider-container">
    <div className="product-slider-header">
    <h5 className="product-slider-title">{title}</h5>
    <span>
      <Link to="/React-Shopping-Project/products">مشاهده همه</Link>
      <KeyboardArrowLeftOutlinedIcon/>
    </span>
    </div>
    <Swiper
      slidesPerView="auto"
      spaceBetween="auto"
      freeMode={true}
      navigation={true}
      modules={[FreeMode,Navigation]}
      className="mySwiper"
      style={{padding:"15px 0"}}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        1400: {
          slidesPerView: 5,
          spaceBetween: 20
        }
      }}
    >

        {productCardData.length && (
            productCardData.map(product => {
              product.quantity = 1;
              return(

                <SwiperSlide key={product.id}><ProductCard {...product}/></SwiperSlide>
                )
            }
            )
        )}
      
    </Swiper>
  </div>
  )
}

