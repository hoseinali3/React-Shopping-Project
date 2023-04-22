import React, { useState, useEffect, useContext } from 'react'
import './ShoppingBasket.css'
import { CartContext } from '../../Components/Context/ShoppingContext';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton, Tooltip, Button } from '@mui/material';

import InputBox from '../../Components/Forms/InputBox/InputBox';
import icon1 from '../../icons/info-icon2.png'
import { Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';
export default function ShoppingBasket() {


  const GlobalState = useContext(CartContext);
  const state = GlobalState.state;
  const dispatch = GlobalState.dispatch;


  const totalPrice = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0)

  return (
    <div className='background-body'>
      <div className="container">
        <div className="shoppingBasket-wrapper">
          <table className='shoppingBasket-table'>
            <thead className='shoppingBasket-thead'>
              <tr>
                <th>شماره</th>
                <th>عکس</th>
                <th>نام محصول</th>
                <th>تعداد</th>
                <th>قیمت</th>
                <th>عملیات</th>
              </tr>
            </thead>
            <tbody className='shoppingBasket-tbody'>
              {state.length ? (
                state.map((product, index) => (
                  <tr key={product.id} className='shoppingBasket-product'>
                    <td className='shoppingBasket-productID'>{index + 1}</td>
                    <td className='shoppingBasket-product-img'>
                      <img src={product.img} alt="" />
                      
                    </td>
      
                    <td className='checkout-productName'>

                      <span className='shoppingBasket-productName'>{product.title}</span>
                    </td>
                    <td className='shoppingBasket-quantity'>
                      <form className="quantity-form">

                        <RemoveOutlinedIcon className="quantity-number-removebtn" onClick={() => product.quantity > 1 ? dispatch({ type: "DECREASE", payload: product }) : dispatch({ type: "REMOVE", payload: product })} />
                        <span className="quantity-number">{product.quantity}</span>
                        <AddOutlinedIcon className="quantity-number-addbtn" onClick={() => dispatch({ type: "INCREACE", payload: product })} />

                      </form>
                    </td>
                    <td className='shoppingBasket-productPrice'>{Number(product.price * product.quantity).toLocaleString()} تومان</td>
                    <td>
                      <Tooltip title="حذف" className='tooltip-title' placement='left' arrow>

                        <IconButton onClick={() => dispatch({ type: "REMOVE", payload: product })} color='error'>

                          <DeleteOutlineIcon />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className='shoppingBasket-emptyBasket'>
                  <img src={icon1} alt="" />
                  <h4 >محصولی در سبد خرید نیست!</h4>
                </tr>
              )

              }
              <tr className='shoppingBasket-footer'>

                <td >

                
                </td>
              
              
                <td className='shoppingBasket-totalPrice-td'>
                  <span>مبلغ قابل پرداخت:</span>
                  <span>{Number(totalPrice).toLocaleString()}</span>
                  <span>تومان</span>
                </td>
                <td className='shoppingBasket-checkout-td'>
                  <Link to="/React-Shopping-Project/checkout" className='shoppingBasket-checkout-btn'>
                    تسویه حساب
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
