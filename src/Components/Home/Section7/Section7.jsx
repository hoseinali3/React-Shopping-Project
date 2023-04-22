import React from 'react'
import { Link } from 'react-router-dom'

import pic1 from '../../../images/Slider/37786698509cc3e885c9371cbce5adccbd7c6b2f_1660738862.jpg'
import pic2 from '../../../images/Slider/c072c4c77865b59438da474d64daa0810f5f614f_1660739706.jpg'


import './Section7.css'
export default function Section7() {
  return (
    <div className='section7-container'>
      <Link to="#"><img src={pic1} alt="" /></Link>
      <Link to="#"><img src={pic2} alt="" /></Link>
    </div>
  )
}
