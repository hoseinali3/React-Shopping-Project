import React, { useEffect, useState } from 'react'
import "./FilterPanel.css"
import FilterToggleList from '../FilterToggleList/FilterToggleList'
import { categoryList } from './FilterProductData'
import CheckBoxProton from '../CheckBoxProton/CheckBoxProton'
import SliderProton from '../SliderProton/SliderProton'

export default function FilterPanel({ 
  selectToggle, 
  selectedCategory, 
  cusines,
  changeChecked,
  changedPrice,
  selectedPrice
}) {





  return (
    <div className='filter-panel-container'>
      {/* Price Range */}

      <div className="filter-group">
        <p className="label">محدوده قیمت</p>
        <SliderProton
        value={selectedPrice}
        changedPrice={changedPrice}
        />
      </div>



      {/* Category */}
      <div className="filter-group">
        <p className="label">دسته بندی</p>
        <FilterToggleList
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectToggle}
        />
      </div>
      {/* Brand Filter */}
      <div className="filter-group">
        <p className="label">برندها</p>
        <div className="filter-checkbox">

        {
          cusines.map(cusine => (
            <CheckBoxProton 
            key={cusine.id}
            cuisine={cusine}
            changeChecked = {changeChecked}
            />
            ))
          }
          </div>
      </div>

    </div>
  )
}
