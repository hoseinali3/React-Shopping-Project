import React from 'react'
import Navbar from './Navbar/Navbar'
import Topbar from './Topbar/Topbar'
import './Header.css'


export default function Header() {
  return (
    <header className='header-container'>
        <Topbar/>
        {/* <Navbar/> */}
    </header >
  )
}
