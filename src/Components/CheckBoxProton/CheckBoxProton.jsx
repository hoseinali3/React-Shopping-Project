
import React from 'react'
import './CheckBoxProton.css'

import { FormControlLabel,Checkbox } from '@mui/material';


export default function CheckBoxProton({cuisine, changeChecked}) {

    const {id,label,checked} = cuisine;

  return (
    <div >
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
