import React from 'react'
import './HomeComp.css'
import Section1 from '../../Components/Home/Section1/Section1'
import Section2 from '../../Components/Home/Section2/Section2'
import Section3 from '../../Components/Home/Section3/Section3'
import Section4 from '../../Components/Home/Section4/Section4'
import Section5 from '../../Components/Home/Section5/Section5'
import Section6 from '../../Components/Home/Section6/Section6'
import Section7 from '../../Components/Home/Section7/Section7'
import Section8 from '../../Components/Home/Section8/Section8'
import SwiperGallery from '../../Components/SwiperGallery/SwiperGallery'
import Section9 from '../../Components/Home/Section9/Section9'

export default function Home() {
  return (
    <div className='background-body'>

    <div className='container'>
       <Section1/>
       <Section2/>
       <Section3/>
       <Section4/>
       <Section5/>
       <Section6/>
       <Section7/>
       <Section8/>
       <Section9/>
       
    </div>
    </div>
  )
}
