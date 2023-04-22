import { Button } from '@mui/material'
import React from 'react'
import './ShoppingPlus.css'
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import pic0 from '../../images/orange-shopping.png'
import pic1 from '../../images/show-product/2eb81b453236bf344dbac1c6b63b0c7be632763f_1606244025.jpg'
import pic2 from '../../images/show-product/2f631aa78b2c5f8606ac099d2897c6ba189474d2_1650890061.jpg'
import pic3 from '../../images/show-product/8aa59b8ecd6493d0ed81ef0c92826144eb3b90b9_1649840330.jpg'
import pic4 from '../../images/show-product/2776164.jpg'
import pic5 from '../../images/show-product/110428654.jpg'
import pic6 from '../../images/show-product/113197926.jpg'
import pic7 from '../../images/show-product/114498510.jpg'
import pic8 from '../../images/show-product/d2e1434a3846b06a6296e7ad430dd84ad1a3fc65_1641899344.jpg'
import pic9 from '../../images/show-product/e3ce9c627823fd19f7b6627ce059c889e2bd556a_1630784095.jpg'
import pic10 from '../../images/show-product/e653310af0d91f1a1af91ec44fb9a6993e51e38f_1598187909.jpg'
import pic11 from '../../images/show-product/ee3d9a63e5de881d9ee212a51efafe3c96df2ec2_1652620920.jpg'
import pic12 from '../../images/show-product/f55ceeffca5e2bdcc904dd939abc37e36cb0ad82_1657598550.jpg'
import icon1 from '../../icons/noun-cashback-109211 copypng.png'
import icon2 from '../../icons/noun-delivery-5104251 copypng.png'
import { Link } from 'react-router-dom';

export default function ShoppingPlus() {
  return (
    <div className='shopping-plus-container'>

    <div className="shopping-plus-rightside">
        <strong className='shopping-plus-title'>شاپینگ پلاس</strong>
        <span className='shopping-plus-subtitle'>خدمات ویژه برای اعضای VIP</span>
        <Button className='shopping-plus-btn'>عضویت<KeyboardArrowLeftOutlinedIcon/></Button>
        <img className='shopping-plus-img' src={pic0} alt="" />
    </div>
        <div className="shopping-plus-leftside">
            <div className="shopping-plus-leftside-col1">
                    <div className="shopping-plus-leftside-header">
                      <div className="shopping-plus-header-right">
                        <img src={icon1} alt="" />
                        <span>هدیه نقدی</span>
                      </div>
                      <div className="shopping-plus-header-left">
                      <Link to="#">
                      <span>مشاهده همه</span>
                      <KeyboardArrowLeftOutlinedIcon/>
                      </Link>
                      </div>
                    </div>
                    <div className="shopping-plus-leftside-body">
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
                      <Link to="#">
                        <img src={pic5} alt="" />
                      </Link>
                      <Link to="#">
                        <img src={pic6} alt="" />
                      </Link>
                      <Link to="#">
                        <img src={pic7} alt="" />
                      </Link>
                      <Link to="#">
                        <img src={pic8} alt="" />
                      </Link>
                      <Link to="#">
                        <img src={pic9} alt="" />
                      </Link>
                    </div>
            </div>
            <div className="shopping-plus-leftside-col2">
            <div className="shopping-plus-leftside-header">
                      <div className="shopping-plus-header-right">
                        <img src={icon2} alt="" />
                        <span>ارسال سریع</span>
                      </div>
                      <div className="shopping-plus-header-left">
                      <Link to="#">
                      <span>مشاهده همه</span>
                      <KeyboardArrowLeftOutlinedIcon/>
                      </Link>
                      </div>
                    </div>
                    <div className="shopping-plus-leftside-body">
                      <Link to="#">
                        <img src={pic1} alt="" />
                      </Link>
                      <Link to="#">
                        <img src={pic10} alt="" />
                      </Link>
                      <Link to="#">
                        <img src={pic3} alt="" />
                      </Link>
                      <Link to="#">
                        <img src={pic12} alt="" />
                      </Link>
                      <Link to="#">
                        <img src={pic5} alt="" />
                      </Link>
                      <Link to="#">
                        <img src={pic11} alt="" />
                      </Link>
                      <Link to="#">
                        <img src={pic7} alt="" />
                      </Link>
                      <Link to="#">
                        <img src={pic8} alt="" />
                      </Link>
                      <Link to="#">
                        <img src={pic9} alt="" />
                      </Link>
                    </div>
            </div>
        </div>
    
    </div>
  )
}
