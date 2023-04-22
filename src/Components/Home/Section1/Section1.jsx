import React from 'react'
import SwiperGallery from '../../SwiperGallery/SwiperGallery'
import './Section1.css'
import pic1 from '../../../images/Slider/a-1.jpg'
import pic2 from '../../../images/Slider/a-2.jpg'
import { Link } from 'react-router-dom'
export default function Section1() {
  return (
    <div className='section1-container'>
        <div className="sec1-leftside">
            <Link to="#">
            <img src={pic1} alt="" />
            </Link>
            <Link to="#">
            <img src={pic2} alt="" />
            </Link>
        </div>
        <SwiperGallery/>
    </div>
  )
}
