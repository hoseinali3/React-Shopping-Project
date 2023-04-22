import { IconButton, InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import './InputBox.css'
export default function InputBox({
  id,
  name,
  label,
  type,
  icon,
  changeHandler,
  value,
  blurHandler,
  errorHandler,
  helperTextHandler,
  handleClickShowPassword
}) {




  return (
    <>
      <TextField
        type={type}
        InputProps={{
         endAdornment: (
            <InputAdornment sx={{cursor:handleClickShowPassword && "pointer"}} onClick={handleClickShowPassword} position="end">
              {icon}
            </InputAdornment>
          ),

        }}
        fullWidth
        id={id}
        name={name}
        label={label}
        onChange={changeHandler}
        value={value}
        onBlur={blurHandler}
        error={errorHandler}
        helperText={helperTextHandler}
        variant="standard" />
    </>
  )
}
