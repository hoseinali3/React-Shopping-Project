import React from 'react'
import './Section5.css'
import pic1 from '../../../images/Slider/a-8.jpg'
import { Link } from 'react-router-dom'
export default function Section5() {
  return (
    <div className='section5-container'>
      <Link to="#">
      <img src={pic1} alt="" />
      </Link>
    </div>
  )
}
