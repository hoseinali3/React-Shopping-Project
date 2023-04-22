import React,{useContext, useState} from 'react'
import './MiniProductCard.css'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

import { CartContext } from '../../Context/ShoppingContext';

export default function MiniProductCard(props) {


    const GlobalState = useContext(CartContext)
    const state = GlobalState.state;
    const dispatch = GlobalState.dispatch;

    // console.log(GlobalState);






    return (

        <li className="miniBasket-productcard">
            <div className="pcard-topbar">
                <span className="product-Name">{props.title}</span>

                <CloseOutlinedIcon className="close-icon"  onClick={() => dispatch({type:"REMOVE",payload:props})}/>
            </div>
            <div className="pcard-midbar">
                <img src={props.img} />
                <div className="pcard-midbar-sec2">
                <form className="quantity-form">
                    
                    <RemoveOutlinedIcon className="quantity-number-removebtn"  onClick={() => props.quantity > 1 ? dispatch({type:"DECREASE",payload:props}) : dispatch({type:"REMOVE",payload:props})}/>
                {/* <input type="number" className="quantity-number"  value={props.quantity} /> */}
                                <span className="quantity-number">{props.quantity}</span>
                    <AddOutlinedIcon className="quantity-number-addbtn"  onClick={() => dispatch({type:"INCREACE",payload:props})}/>
               
            </form>
            <span className='pcard-midbar-colortitle'>رنگ: <div className="pcard-midbar-color" style={{backgroundColor:props.color ? props.color : "#fff"}}></div></span>
                </div>
            </div>
            <div className="pcard-footerbar">
               
                <span className="product-price">{Number(props.price * props.quantity).toLocaleString()} <span>تومان</span></span>
            </div>
        </li>

    )
}
