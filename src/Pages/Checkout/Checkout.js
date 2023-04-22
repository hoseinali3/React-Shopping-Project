import React, { useState, useEffect, useContext } from 'react'
import './Checkout.css'
import { CartContext } from '../../Components/Context/ShoppingContext';
import { IconButton, Tooltip, Button, FormControlLabel, Radio, RadioGroup } from '@mui/material';

import mellatIcon from '../../icons/Mellat png.png'
import Bank_Melli_Iran_New_Logo from '../../icons/Bank_Melli_Iran_New_Logo.png'
import InputBox from '../../Components/Forms/InputBox/InputBox';
import icon1 from '../../icons/info-icon2.png'
import { Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';


export default function Checkout() {

  const GlobalState = useContext(CartContext);
  const state = GlobalState.state;
  const dispatch = GlobalState.dispatch;

  const [offInputValue, setOffInputValue] = useState(null);
  const [offInputError, setOffInputError] = useState(false);
  const [offCodeData, setOffCodeData] = useState(null);
  const [offPrice, setOffPrice] = useState(null);
  const [changeOffBtn, setChangeOffBtn] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const totalPrice = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0)


  useEffect(() => {
    setOffCodeData(localStorage.getItem("offcode"))
  }, [])

  const offCodeSubmitHandler = () => {


    if (state.length) {
      if (offCodeData === offInputValue) {

        setOffPrice(50000)
        setChangeOffBtn(true)
        enqueueSnackbar('کد تخفیف با موفقیت اعمال شد!', { variant: "success", autoHideDuration: 4000 })
        setOffInputValue('')
      } else {

        enqueueSnackbar('کد وارد شده صحیح نیست', { variant: "error", autoHideDuration: 4000 })
      }
    } else {

      enqueueSnackbar('ابتدا محصولی به سبد خرید اضافه کنید!', { variant: "warning", autoHideDuration: 4000 })
    }

  }

  const offCodeCancelHandler = () => {
    setChangeOffBtn(false)
    setOffPrice(null)
  }
  useEffect(() => {
    setInterval(() => {
      setOffInputError(false)
    }, 5000);
  }, [offInputError])


  useEffect(() => {
    if (!state.length) {
      setOffPrice('')
    }
  }, [state])



  return (
    <div className='background-body'>
      <div className="container">
        <div className="checkout-wrapper">
          <table className='checkout-table'>
            <thead className='checkout-thead'>
              <tr>
                <th>شماره</th>
                <th>عکس</th>
                <th>نام محصول</th>
                <th>تعداد</th>
                <th>قیمت</th>

              </tr>
            </thead>
            <tbody className='checkout-tbody'>
              {state.length ? (
                state.map((product, index) => (
                  <tr key={product.id} className='checkout-product'>
                    <td className='checkout-productID'>{index + 1}</td>
                    <td className='checkout-product-img'>
                      <img src={product.img} alt="" />
                    </td>
                    <td className='checkout-productName'>

                      <span className='checkout-productName'>{product.title}</span>
                    </td>
                    <td className='checkout-quantity'>
                      {product.quantity}
                    </td>
                    <td className='checkout-productPrice'>{Number(product.price * product.quantity).toLocaleString()} تومان</td>

                  </tr>
                ))
              ) : (
                <tr className='checkout-emptyBasket'>
                  <td>
                    <img src={icon1} alt="" />
                    <h4 >محصولی در سبد پرداخت نیست!</h4>
                  </td>
                </tr>
              )

              }
              <tr className='checkout-footer'>

                <td className='shoppingBasket-off-td'>

                  <InputBox
                    id="off-input"
                    name="off-input"
                    label="کد تخفیف:"
                    type="text"
                    changeHandler={event => setOffInputValue(event.target.value)}
                    value={offInputValue}
                    errorHandler={offInputError}
                    helperTextHandler={offInputError && "کد وارد شده صحیح نیست!"}
                  />
                  {changeOffBtn ?
                    (
                      <Button className='cancel-offCode' onClick={offCodeCancelHandler}>
                        حذف کد تخفیف
                      </Button>

                    ) : (

                      <Button className='submit-offCode' onClick={offCodeSubmitHandler}>
                        ثبت کد تخفیف
                      </Button>
                    )
                  }
                </td>
                <td>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className="checkout-banks"
                  >
                    <span>درگاه پرداخت:</span>
                    <div  className='d-flex'>
                      <FormControlLabel value="mellat" control={<Radio className='radio-bg-none' id='mellat-id' />} />
                      <label for="mellat-id" class="radio-button">
                        <img src={mellatIcon} id="mellat" alt="" />
                      </label>
                    </div>
                    <div className='d-flex'>
                      <FormControlLabel value="melli" control={<Radio className='radio-bg-none' id='melli-id' />} />

                      <label for="melli-id" class="radio-button">
                        <img src={Bank_Melli_Iran_New_Logo} id="melli" alt="" />
                      </label>
                    </div>

                  </RadioGroup>
                </td>
                <td className='checkout-totalPrice-td'>
                  <span>مبلغ قابل پرداخت:</span>
                  <span>{Number(totalPrice - offPrice).toLocaleString()}</span>
                  <span>تومان</span>
                </td>
                <td className='checkout-paying-td'>
                  <Link to="/React-Shopping-Project/checkout" className='checkout-paying-btn'>
                    پرداخت
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
