import React, { useState } from 'react'
import './SwiperProductDetailGallery.css'
import './SwiperProductDetailGallery.scss'

import { swiperProductGalleryData } from './SwiperProductDetailGalleryData'
import ReactImageMagnify from 'react-image-magnify';
import { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles




export default function SwiperProductDetailGallery() {


    const [activeThumb,setActiveThumb] = useState()



    const [imageGallery, setImageGallery] = useState(swiperProductGalleryData)

    return (
        <div className='swiper-product-detail-gallery-container'>

            <Swiper
                navigation={true}
                loop={true}
                modules={[Navigation, Thumbs]}
                grabCursor={true}
                className="product-images-slider"
                thumbs={{swiper: activeThumb}}
                >

                {
                    imageGallery.map(img => (
                        <SwiperSlide key={img.id}>
                            <img src={img.img} alt="" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <Swiper
                onSwiper={setActiveThumb}
                slidesPerView={4}
                spaceBetween={10}
                modules={[Navigation]}
                className="product-images-slider-thumbs"

            >

                {
                    imageGallery.map(img => (

                        <SwiperSlide key={img.id}>
                            <div className='product-images-slider-thumbs-wrapper'>
                                <img src={img.img} alt="" />
                            </div>
                        </SwiperSlide>
                    )

                    )
                }

            </Swiper>
        </div>
    )
}




