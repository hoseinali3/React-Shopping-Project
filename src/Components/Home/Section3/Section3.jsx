import React from 'react'
import './Section3.css'

import pic1 from '../../../images/Slider/a-4.jpg'
import pic2 from '../../../images/Slider/a-5.jpg'
import pic3 from '../../../images/Slider/a-6.jpg'
import pic4 from '../../../images/Slider/a-7.jpg'
import { Link } from 'react-router-dom'


export default function Section3() {
  return (
    <div className='section3-container'>
      <Link to="#">

      <img src={pic1} alt="" />
      </Link>
      <Link to="#">
      <img src={pic2} alt="" />
      </Link>
      <Link to="#">
      <img src={pic3} alt="" />
      </Link>
      <Link to="#">
      <img src={pic4} alt="" />
      </Link>
    </div>
  )
}
