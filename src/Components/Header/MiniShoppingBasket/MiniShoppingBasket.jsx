import { Button } from '@mui/material'
import React, { useContext,useMemo } from 'react'
import { Link } from 'react-router-dom'
import MiniProductCard from './MiniProductCard'
import shoppingIcon from '../../../icons/bag-1.png'
import './MiniShoppingBasket.css'
import { CartContext } from '../../Context/ShoppingContext'
import icon1 from '../../../icons/info-icon2.png'

export default function MiniShoppingBasket() {

    const GlobalState = useContext(CartContext)
    const state = GlobalState.state;
    
    


 const totalPrice = state.reduce((total, item) => {
   return total + item.price * item.quantity;
},0)
 




    return (
        <div className='mini-shopping-basket-container'>

            <Link to="React-Shopping-Project/shoppingbasket">
                <Button className='mini-shopping-basket-button' >

                    <img className='mini-shopping-basket-icon' src={shoppingIcon} alt="" />
                    <div className="mini-shopping-basket-middle" style={!state.length ? {width:"105px"} : null}>
                        <span className='mini-shopping-basket-title'>سبد خرید</span>
                        <span className='mini-shopping-basket-sum-Price'>{Number(totalPrice).toLocaleString()}<span> تومان</span></span>
                    </div>
                    <span className="counter-product" >{state.length}</span>
                </Button>
            </Link>
            <div className="products-list">
                <div className="scrollbar">

                    <ul className="ul-basket">
                        
                    {
                        useMemo(() =>
                        
                        state.length ? (
                            state.map(item => (
                                <MiniProductCard key={item.id} {...item}/>
                        ))
                        ) : (
                            <div className="empty-basket">
                            <img src={icon1} alt="" />
                            <span>محصولی در سبد نیست !</span>
                        </div>
                       )
                       ,[state])
                    }
                    

                    </ul>
                </div>
                <div className="all-price">
                    <p>مبلغ قابل پرداخت :</p>
                    <span className="num-all-price">{Number(totalPrice).toLocaleString()}<span> تومان</span></span>
                </div>
                <div className="mini-shopping-basket-btns">
                <Link to="React-Shopping-Project/shoppingbasket" className="seen-basket">مشاهده سبد خرید</Link>
                <Link to="React-Shopping-Project/checkout" className="checkout">تسویه حساب</Link>
                </div>
            </div>
        </div>
    )
}


