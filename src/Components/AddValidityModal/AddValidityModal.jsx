import React, { useEffect,useState } from 'react'

import './AddValidityModal.css'
import { Button, FormControlLabel, IconButton, Radio, RadioGroup, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import mellatIcon from '../../icons/Mellat png.png'
import Bank_Melli_Iran_New_Logo from '../../icons/Bank_Melli_Iran_New_Logo.png'
import InputBox from '../Forms/InputBox/InputBox';

export default function AddValidityModal({isShowModal, cancelValidityModal}) {
 

        const [inputValue,setInputValue] = useState('')

    useEffect(() => {
        const closeDetailModal = (event) => {

            if (event.key === "Escape") {

                cancelValidityModal()
                window.removeEventListener("keydown", closeDetailModal)

            }
        };

        isShowModal && window.addEventListener("keydown", closeDetailModal)
    });
 
 
 
 
    return (
        <div className={isShowModal ? 'modalparent active' : 'modalparent'}>
        <div className="add-validity-wrapper">
            <div className="add-validity-header">
            <h5>افزودن اعتبار</h5>
            <IconButton className='cancel-validity-btn' onClick={() => cancelValidityModal()} ><CloseIcon /></IconButton>
            </div>
            <InputBox
                    id="off-input"
                    name="off-input"
                    label="مبلغ:"
                    type="number"
                    changeHandler={event => setInputValue(event.target.value)}
                    value={inputValue}
                    
                  />
            <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className="checkout-banks"
                  >
                    <span>درگاه پرداخت:</span>
                    <div className='d-flex'>
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
           <Button className='paying-validity-btn'>
            پرداخت
           </Button>
        </div>
    </div>
    )
}
