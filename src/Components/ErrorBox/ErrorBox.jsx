import React from 'react'
import './ErrorBox.css'


export default function ErrorBox({title}) {
  return (
    <div className='error-container'>
        <h2 className='error-title'>{title}</h2>
    </div>
  )
}
