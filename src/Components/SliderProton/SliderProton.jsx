import { Slider } from '@mui/material'
import React from 'react'
import './SliderProton.css'
export default function SliderProton({value,changedPrice}) {
  return (
    <div className='slider-proton-container'>
        <div className="slider-price">
        <Slider
        value={value}
        onChange={changedPrice}
        min={2000000}
        max={100000000}
      
        />
        </div>
        <div className="silder-prices-value">
                <span>{Number(value[1]).toLocaleString()} تومان</span>
                <span>{Number(value[0]).toLocaleString()} تومان</span>
        </div>
    </div>
  )
}
