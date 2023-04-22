
import React from 'react'
import './CheckBoxProton.css'
import './CheckBoxProton.scss'

import { FormControlLabel,Checkbox } from '@mui/material';


export default function CheckBoxProton({cuisine, changeChecked}) {

    const {id,label,checked} = cuisine;

  return (
    <div className='checkbox-proton-wrapper'>
        <FormControlLabel
        control={<Checkbox
        checked={checked}
        size="small"
        onChange={() => changeChecked(id)}
        />}

        label={label}
        />

        
    </div>
  )
}
