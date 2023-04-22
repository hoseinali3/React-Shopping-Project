import React, { useState, useEffect, useContext } from 'react'
import './ProductCard.css'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import isInStockIcon from '../../icons/is in product.svg'
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareOutlinedIcon from '@mui/icons-material/CompareOutlined';
import { CartContext } from '../Context/ShoppingContext';
import { useSnackbar } from 'notistack';
import { FavContext } from '../Context/FavoriteContext';


export default function ProductCard(props) {

    const { id, title, img, count, price, fav } = props;
    const GlobalState = useContext(CartContext)
    const dispatch = GlobalState.dispatch;

    const FavState = useContext(FavContext)
    const dispatch2 = FavState.dispatch;

    const { enqueueSnackbar } = useSnackbar();

    return (
        <div className='product-card-container'>
            <Link className={!count ? "active-row-gap" : null} to={window.location.pathname === "/React-Shopping-Project" ? (`products/${id}`) : (`${id}`)}>
                <div className="product-card-img">
                    <img className='img-fluid' src={img} alt="" />
                </div>
                <p className="product-card-title">{title.slice(0, 20)}...</p>
            </Link>
            <div className={`product-card-mid ${!count && "mid-height"}`}>
                <div className="product-card-isinstock">
                    {count ? (
                        <>
                            <img className='product-card-isinstock-icon' src={isInStockIcon} alt="" />
                            <span className='product-card-isinstock-title'>موجود در انبار</span>
                        </>
                    ) : (
                        <strong className='outofstock'>ناموجود</strong>
                    )}
                </div>
                <div className="product-card-favorite">
                    <span className="product-card-favorite-number">
                        {fav}
                    </span>
                    <div className="product-card-favIcon">
                        {fav >= 4 ? <StarOutlinedIcon /> : <StarHalfOutlinedIcon />}
                    </div>

                </div>
            </div>
            {count ? (
                <span className="product-card-price">{Number(price).toLocaleString()} <span>تومان</span></span>

            ) : (
                null
            )}
            <div className="product-card-btns">
                {count ? (
                    <IconButton className='product-card-addbtn' onClick={() => {
                        dispatch({ type: 'ADD', payload: props })
                        enqueueSnackbar('محصول با موفقیت به سبدخرید اضافه شد!', { variant: "success", autoHideDuration: 3000 })
                    }}>
                        <AddShoppingCartOutlinedIcon />
                    </IconButton>
                ) : (null)
                }
                <IconButton className='product-card-favbtn' onClick={() => {
                    dispatch2({ type: 'ADD', payload: props })
                    enqueueSnackbar('محصول با موفقیت به علاقه‌مندی‌ها اضافه شد!', { variant: "success", autoHideDuration: 3000 })
                }}>
                    <FavoriteBorderOutlinedIcon />
                </IconButton>
                <IconButton className='product-card-comparebtn'>
                    <CompareOutlinedIcon />
                </IconButton>
            </div>
        </div >
    )
}
