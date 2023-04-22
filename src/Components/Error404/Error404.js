import React from 'react'
import './Error404.css'
import Lottie from 'lottie-react'
import error404 from '../../images/error404.json'
export default function Error404() {
  return (
    <div className='error404-wrapper'>
       <div className="error404-img">
       <Lottie animationData={error404} loop={true}/>
       </div>
    </div>
  )
}
