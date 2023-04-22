import React, { useState, useContext, useMemo } from 'react'
import './MobileMiniShoppingBasket.css'
import './MobileMiniShoppingBasket.scss'
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { CartContext } from '../../Context/ShoppingContext'
import { Link } from 'react-router-dom';
import { IconButton, SwipeableDrawer } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import shoppingIcon from '../../../icons/bag-1.png'
import MiniProductCard from '../MiniShoppingBasket/MiniProductCard';
import icon1 from '../../../icons/info-icon2.png'

export default function MobileMiniShoppingBasket() {

    const [open, setOpen] = useState(false)

    const GlobalState = useContext(CartContext)
    const state = GlobalState.state;


    const totalPrice = state.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0)

    const list = (anchor) => (

        <List sx={{ width: 280, direction: "rtl" }} >
            <CloseIcon sx={{ marginRight: 2, fontSize: 50, color: "#3a3a3a" }} onClick={() => setOpen(prev => !prev)} />
           


            <>
                <div className="scrollbar" style={{height:"27em"}}>

                    <ul className="ul-basket">
                        
                    {
                state.length ? (

                    state.map((item, index) => (
                        <div key={item.id}>
                            <ListItem sx={{ padding: 0 }}  >

                                <MiniProductCard key={item.id} {...item} />






                            </ListItem>

                        </div>
                    )
                    )) : (
                    <div className="empty-basket" style={{height:"400px"}}>
                        <img src={icon1} alt="" />
                        <span>محصولی در سبد نیست !</span>
                    </div>
                )

            }
                    

                    </ul>
                </div>
                <div className="all-price">
                    <p>مبلغ قابل پرداخت :</p>
                    <span className="num-all-price">{Number(totalPrice).toLocaleString()}<span> تومان</span></span>
                </div>
                <div className="mini-shopping-basket-btns" style={{rowGap:"1em"}}>
                <Link to="React-Shopping-Project/shoppingbasket" className="seen-basket">مشاهده سبد خرید</Link>
                <Link to="React-Shopping-Project/checkout" className="checkout">تسویه حساب</Link>
                </div>
            </>


       

        </List>

    );

    return (
        <>


            <IconButton className="mobile-mini-shopping-basket" onClick={() => setOpen(prev => !prev)} >
            <img src={shoppingIcon} alt="" />
            </IconButton>


            <SwipeableDrawer
                anchor={"left"}
                open={open}
                onClose={() => setOpen(prev => !prev)}
                sx={{ direction: "rtl" }}
            >
                {list("left")}
            </SwipeableDrawer>






        </>
    )
}
