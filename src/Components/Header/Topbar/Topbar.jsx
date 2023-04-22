import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Topbar.css'
import './Topbar.scss'
import Logo from '../../../images/online-shopping-logo-design-with-a-tablet-under-vector-133148.png'
import SeachLogo from "../../../icons/search.png"
import swiperProductData from '../../SwiperProductSlider/SwiperProductSliderData'
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import MobileMenu from '../MobileMenu/Mobile-Menu'
import MobileMiniShoppingBasket from '../MobileMiniShoppingBasket/MobileMiniShoppingBasket'


export default function Topbar() {

    const [getIsLogin, setGetIsLogin] = useState(null)
    const [getUserName, setGetUserName] = useState(null)
    const [searchValue, setSearchValue] = useState(null)
    const [allProducts, setAllProducts] = useState(swiperProductData)

    useEffect(() => {
        setGetIsLogin(localStorage.getItem('isLogin'))
        setGetUserName(localStorage.getItem('userName'))

    }, [])


    useEffect(() => {
        setGetIsLogin(localStorage.getItem('isLogin'))
        setGetUserName(localStorage.getItem('userName'))
    }, [getIsLogin,
        getUserName])





    return (
        <div className='topbar-container'>
           
            <MobileMenu/>
            <Button className='reg-login-btn'>
                {getIsLogin ? (
                    <Link to='React-Shopping-Project/userpanel'>
                        {getUserName}
                    </Link>
                ) : (
                    <Link to='React-Shopping-Project/login'>
                        ورود | ثبت نام
                    </Link>
                )}
            </Button>
            <div className='search-bar'>
                <input type="text" className='search-input' onChange={event => setSearchValue(event.target.value)} placeholder='نام کالا، برند و یا دسته مورد نظر خود را وارد کنید...' />
                <div className="search-bar-leftside">
                    <FormControl sx={{ minWidth: 120 }}>
                        <InputLabel htmlFor="grouped-select" sx={{ fontFamily: "IRsans-web" }}>دسته بندی</InputLabel>
                        <Select defaultValue="" id="grouped-select" label="Grouping" sx={{ fontFamily: "IRsans-web", color: "var(--darker-gray)" }} >
                            <MenuItem value="">
                                <em>هیچ</em>
                            </MenuItem>

                            <MenuItem sx={{ fontFamily: "IRsans-web" }} value={1}>کالای دیجیتال</MenuItem>
                            <MenuItem sx={{ fontFamily: "IRsans-web" }} value={2}>آرایشی و بهداشتی</MenuItem>
                            <MenuItem sx={{ fontFamily: "IRsans-web" }} value={3}>مد و پوشاک</MenuItem>
                            <MenuItem sx={{ fontFamily: "IRsans-web" }} value={4}>ابزار اداری</MenuItem>
                            <MenuItem sx={{ fontFamily: "IRsans-web" }} value={5}>لوازم خانه و آشپزخانه</MenuItem>
                            <MenuItem sx={{ fontFamily: "IRsans-web" }} value={6}>کودک و نوزاد</MenuItem>
                            <MenuItem sx={{ fontFamily: "IRsans-web" }} value={7}>لوازم و تحریر</MenuItem>
                        </Select>
                    </FormControl>
                    <Button className='search-btn'>

                        <img src={SeachLogo} className="search-logo" alt="" />
                    </Button>
                </div>
                <div className={`searchAllItems ${searchValue && "active"}`}>
                    <div className="searchAllItems-overflow scroll-Body">

                        <ul className='searchAllItems-list'>
                            {

                                allProducts
                                    .filter(product => product.title.includes(searchValue)) ? (
                                    allProducts
                                        .filter(product => product.title.includes(searchValue))
                                        .map(product => (
                                            <Link to={`/React-Shopping-Project/products/${product.id}`}>
                                            <li className='searchAllItems-listitem'>
                                                <img src={product.img} alt="" />
                                                <span>{product.title}</span>
                                                <span>{Number(product.price).toLocaleString()} تومان</span>
                                            </li>
                                            </Link>

                                        ))
                                ) : (
                                    <h3>محصولی یافت نشد!</h3>
                                )

                            }
                        </ul>
                    </div>
                </div>

            </div>
            <NavLink to="React-Shopping-Project">

                <img src={Logo} className="logo" alt="" />
            </NavLink>
        </div>
    )
}
