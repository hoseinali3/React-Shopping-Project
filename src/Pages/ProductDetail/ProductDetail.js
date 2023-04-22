import { Button, IconButton, Tooltip } from '@mui/material'
import React, { useState, useContext, useEffect } from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareOutlinedIcon from '@mui/icons-material/CompareOutlined';
import tagIcon from '../../icons/icons8-tag-96.png'
import isInStockIcon from '../../icons/is in product.svg'
import './ProductDetail.css'
import SwiperProductDetailGallery from '../../Components/SwiperProductDetailGallery/SwiperProductDetailGallery';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { CartContext } from '../../Components/Context/ShoppingContext';
import pic1 from '../../images/products/100727276_0388581405.jpg'
import { useParams } from 'react-router-dom';
import swiperProductData from '../../Components/SwiperProductSlider/SwiperProductSliderData';
import shoppingIcon from '../../icons/icons8-shopping-cart-96 white.png'

import { useSnackbar } from 'notistack';
import { Attributes } from './ProductDetailData';
import ProductDetailTabs from '../../Components/ProductDetailTabs/ProductDetailTabs';

import { FavContext } from '../../Components/Context/FavoriteContext';

export default function ProductDetail() {

  const GlobalState = useContext(CartContext)
  const state = GlobalState.state;
  const dispatch = GlobalState.dispatch;


  const FavState = useContext(FavContext)
  const state2 = FavState.state;
  const dispatch2 = FavState.dispatch;



  const { enqueueSnackbar } = useSnackbar();
  const [activeColorID,setActiveColorID] = useState(null)
  const [productData, setProductData] = useState(swiperProductData);

  const breadCrumbData = [
    {id:1,title:"خانه",link:"React-Shopping-Project",color:"#797979"},
    {id:2,title:"دسته بندی",link:"React-Shopping-Project/products",color:"#797979"},
    {id:3,title:"لپ تاپ ایسوس",link:"React-Shopping-Project/products/1",color:"#FFB300"},
]



  const [oneProduct, setOneProduct] = useState([
    { id: 1, title: "لپ تاپ ایسوس زنبوک مدل UX325EA", color: "#808080", img: pic1, count: 4, price: 52000000, brand: "asus", category: "laptop", fav: 4, quantity: 1, newest_product: 0, seen_product: 0, sale_product: 1 },
    { id: 2, title: "لپ تاپ ایسوس زنبوک مدل UX325EA", color: "#c0c0c0", img: pic1, count: 4, price: 52000000, brand: "asus", category: "laptop", fav: 4, quantity: 1, newest_product: 0, seen_product: 0, sale_product: 1 },
    { id: 3, title: "لپ تاپ ایسوس زنبوک مدل UX325EA", color: "#0000ff", img: pic1, count: 4, price: 52000000, brand: "asus", category: "laptop", fav: 4, quantity: 1, newest_product: 0, seen_product: 0, sale_product: 1 },
  ])

  const [addColorProduct, setAddColorProduct] = useState([])


  const [garranty, setGarranty] = useState([
    { id: 1, title: "یکپارچه ایسوس - 36 ماه", active: true, price: 52000000 },
    { id: 2, title: "شرکتی - 24 ماه", active: false, price: 48000000 }
  ])
  const [productColors, setProductColors] = useState([
    { id: 1, title: "نوک مدادی", color: "#808080", active: true },
    { id: 2, title: "خاکستری", color: "#c0c0c0", active: false },
    { id: 3, title: "آبی", color: "#0000ff", active: false },
  ])

  const [attrib, setAttrib] = useState(Attributes)

  useEffect(() => {
    activeColorBtn(1)
    setActiveColorID(1)
  }, [])



  // useEffect(() => {
  //   activeColorBtn(activeColorID)

  // }, [oneProduct])



  const activeGarrantyBtn = id => {
    const cpGarranty = garranty;
    const newCpGarranty = cpGarranty.map(item => (
      item.id === id ? { ...item, active: true } : { ...item, active: false }
    ))
    const cpProductsForGarranty = oneProduct.map(product => (
      { ...product,price: +newCpGarranty.filter(item => item.active && item.price)[0].price }
    ))
    setGarranty(newCpGarranty)
    setOneProduct(cpProductsForGarranty)
   
  }

  const activeColorBtn = id => {
    const cpProductColors = productColors;
    const newCpProductColors = cpProductColors.map(item => (
      item.id === id ? { ...item, active: true } : { ...item, active: false }
    ))
    setProductColors(newCpProductColors)

    const [changeColorObj] = newCpProductColors.filter(color => color.active)
    const [filterProductColor] = oneProduct.filter(product => product.color === changeColorObj.color)
    setAddColorProduct(filterProductColor)

    

  }



  return (
    <div className='background-body'>
   
      
      <div className="container product-detail-wrapper">
        <div className="product-detail-header">
          <div className="fav-comp-btns">
            <Tooltip title="افزودن به علاقه‌مندی‌ها" className='tooltip-title' placement='right' arrow>

              <IconButton className='product-card-favbtn' onClick={() => {
                enqueueSnackbar('محصول با موفقیت به علاقه‌مندی‌ها اضافه شد!', { variant: "success", autoHideDuration: 3000 })
                dispatch2({ type: 'ADD', payload: addColorProduct })

              }}>
                <FavoriteBorderOutlinedIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="مقایسه" placement='right' arrow>
              <IconButton className='product-card-comparebtn'>
                <CompareOutlinedIcon />
              </IconButton>
            </Tooltip>
          </div>
          <div className="product-detail-gallery">

            <SwiperProductDetailGallery />
          </div>
          <div className="product-details-quickview">
            <span className="product-details-quickview-title">
              لپ تاپ ایسوس مدل UX325EA Core i7 11th
            </span>
            <span className="product-details-quickview-subtitle">
              asus-UX325EA-Core i7(11th)-16GB-1TB SSD-intel
            </span>
            <div className="product-details-quickview-tags">
              <div className="quickview-tag">
                <img src={tagIcon} alt="" />
                <span>
                  ایسوس
                </span>
              </div>
              <div className="quickview-tag">
                <img src={tagIcon} alt="" />
                <span>
                  لپ تاپ
                </span>
              </div>
            </div>
            <div className="product-details-quickview-specs">
              <ul className="quickview-specs-list">
                <li className="quickview-specs-listitem">مجهز به پردازنده Core i7 1165G7</li>
                <li className="quickview-specs-listitem">حافظه رم 16 گیگابایتی از نوع LPDDR4X</li>
                <li className="quickview-specs-listitem">دارای 1 ترابایت حافظه SSD از نوع M.2 NVME</li>
                <li className="quickview-specs-listitem">صفحه نمایش OLED با رزولوشن FHD</li>
                <li className="quickview-specs-listitem">باتری لیتیوم پلیمری 3 سلولی</li>
              </ul>
            </div>

          </div>
          <div className="product-detail-shopping-btns">
            <div className="product-detail-shopping-garranties">
              <span className="product-detail-shopping-garranties-title">
                گارانتی:
              </span>
              {
                garranty.map(item => (

                  <Button key={item.id} className={`product-detail-shopping-garranties-btns ${item.active ? 'active' : null}`} onClick={() => activeGarrantyBtn(item.id)}>
                    {item.title}
                  </Button>
                ))
              }

            </div>
            <div className="product-detail-shopping-colors">
              <span className="product-detail-shopping-colors-title">رنگ:</span>
              <ul className='color-list'>

                {
                  productColors.map(item => (
                    <Tooltip key={item.id} title={item.title} className='tooltip-title' placement='top' arrow>
                      <li style={{ backgroundColor: item.color }} onClick={() =>{
                        setActiveColorID(item.id)
                        activeColorBtn(item.id)
                        }} className={`color-listitem ${item.active ? "active" : null}`} ></li>
                    </Tooltip>
                  ))
                }
              </ul>
            </div>
            <div className="product-detail-shopping-isinstock">
              <img src={isInStockIcon} alt="" />
              <span>موجود در انبار</span>
            </div>
            <div className="product-detail-shopping-price">
              
              {
                garranty.map(item => (
                  item.active && Number(item.price).toLocaleString()
                ))
              }
              <span> تومان</span>
            </div>
            <div className="product-detail-shopping-quantity">
              <span className='product-detail-shopping-quantity-title'>تعداد:</span>
              <form className="quantity-form">

                <RemoveOutlinedIcon className="quantity-number-removebtn" onClick={() => addColorProduct.quantity < 2 ? setAddColorProduct({ ...addColorProduct, quantity: 1 }) : setAddColorProduct({ ...addColorProduct, quantity: addColorProduct.quantity - 1 })} />
                <span className="quantity-number">{addColorProduct.quantity}</span>
                <AddOutlinedIcon className="quantity-number-addbtn" onClick={() => setAddColorProduct({ ...addColorProduct, quantity: addColorProduct.quantity + 1 })} />


              </form>
            </div>
            <div className="product-detail-shopping-addproduct">

              <Button className='product-detail-shopping-addproduct-btn' onClick={() => {
                enqueueSnackbar('محصول با موفقیت به سبدخرید اضافه شد!', { variant: "success", autoHideDuration: 3000 })
                dispatch({ type: 'ADD', payload: addColorProduct })

              }}>
                <img src={shoppingIcon} alt="" />
                <span>افزودن به سبد خرید</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="product-detail-attrib">

          <ul className="product-detail-attrib-list">
            {
              attrib.map(item => (
                <li key={item.id} className="product-detail-attrib-listitem">
                  <img src={item.icon} alt="" />
                  <span>{item.title}</span>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="product-detail-infomations">
          <ProductDetailTabs />
        </div>
      </div>
    </div>
  )
}
