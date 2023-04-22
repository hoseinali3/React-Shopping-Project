import React, { useEffect } from 'react'
import './FilterToggleList.css'
import { ToggleButtonGroup,ToggleButton } from '@mui/material'



export default function FilterToggleList({options,value,selectToggle}) {




  return (
    <ToggleButtonGroup
    value={value}
    onChange={selectToggle}
    exclusive
    >
      {
        options.map((item) => (
          <ToggleButton  key={item.id} value={item.value}>
            {item.label}
          </ToggleButton>
        ))
      }
    </ToggleButtonGroup>
  )
}
